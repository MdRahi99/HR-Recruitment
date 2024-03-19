import { Pie } from 'react-chartjs-2';
import { useState, useEffect } from 'react';
import Loader from '../Pages/Shared/Loader/Loader';

const PieChart = () => {
    const [chartData, setChartData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://hr-recruitment-server.vercel.app/candidates');
                const data = await response.json();

                const genderData = {
                    labels: ['Female', 'Male'],
                    datasets: [{
                        data: [0, 0],
                        backgroundColor: ['#f0cd7d', '#318f89'],
                        hoverBackgroundColor: ['#f0cd7d', '#318f89'],
                    }]
                };

                data.forEach(candidate => {
                    if (candidate.gender === 'female') {
                        genderData.datasets[0].data[0]++;
                    } else if (candidate.gender === 'male') {
                        genderData.datasets[0].data[1]++;
                    }
                });

                setChartData(genderData);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching gender data:', error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {isLoading ? (
                <Loader />
            ) : (
                <Pie
                    data={chartData}
                    options={{
                        plugins: {
                            title: {
                                display: true,
                                text: 'Candidates by Gender',
                                font: {
                                    size: 12
                                }
                            },
                            legend: {
                                display: true,
                                position: 'bottom',
                                labels: {
                                    font: {
                                        size: 12
                                    }
                                }
                            }
                        },
                        maintainAspectRatio: false,
                        responsive: true
                    }}
                    height={300} 
                    width={300} 
                />
            )}
        </div>
    );
};

export default PieChart;
