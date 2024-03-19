import { defaults } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { useState, useEffect } from 'react';
import Loader from "../Pages/Shared/Loader/Loader";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 12;
defaults.plugins.title.color = "black";

const fetchData = async () => {
    const response = await fetch('https://hr-recruitment-server.vercel.app/candidates');
    const data = await response.json();
    return data;
}

const processData = (data) => {
    const chartData = {
        labels: [],
        datasets: [{
            label: 'Applicant Status',
            data: [],
            backgroundColor: [
                'rgba(217, 45, 39)',
                'rgba(73, 204, 197)',
                'rgba(64, 173, 141)',
                'rgba(222, 165, 51)',
            ],
            borderRadius: 5,
        }]
    };

    const statusMap = {};
    data.forEach(applicant => {
        const status = applicant.status;
        if (!statusMap[status]) {
            statusMap[status] = 0;
        }
        statusMap[status]++;
    });

    chartData.labels = Object.keys(statusMap);
    chartData.datasets[0].data = Object.values(statusMap);

    return chartData;
}

const BarChart = () => {
    const [isLoading, setIsLoading] = useState(true); 
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        const fetchDataAndProcess = async () => {
            const fetchedData = await fetchData();
            const processedData = processData(fetchedData);
            setChartData(processedData);
            setIsLoading(false);
        };
        fetchDataAndProcess();
    }, []);

    return (
        <div className="dataCard customerCard">
            {isLoading ? (
                <Loader />
            ) : (
                <Bar
                    data={chartData}
                    options={{
                        plugins: {
                            title: {
                                text: "Applicant Status Distribution",
                            },
                        },
                        indexAxis: 'x',
                        elements: {
                            bar: {
                                borderWidth: 1,
                                borderRadius: 5,
                                borderSkipped: 'bottom',
                            }
                        },
                        layout: {
                            padding: {
                                left: 2,
                                right: 2,
                                top: 2,
                                bottom: 2
                            }
                        },
                        scales: {
                            y: {
                                grid: {
                                    display: false
                                }
                            }
                        },
                        responsive: true,
                        maintainAspectRatio: false,
                        barThickness: 10,
                        categorySpacing: 0
                    }}
                    height={300} 
                    width={300} 
                />
            )}
        </div>
    );
};

export default BarChart;
