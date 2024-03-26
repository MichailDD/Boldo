const ctx = document.getElementById('myDonutChart').getContext('2d')

const data = {
	labels: ['Investor bandwidth', 'A/B testing', ' Agile Development'],
	datasets: [
		{
			data: [30, 35, 35],
			backgroundColor: ['#69E6A6', '#0A2640', '#0DBBFC'],
			borderColor: ['#69E6A6', '#0A2640', '#0DBBFC'],
			borderWidth: 1
		}
	]
}

export function chart() {
	const myDonutChart = new Chart(ctx, {
		type: 'doughnut',
		data: data,
		options: {
			responsive: true,
			plugins: {
				legend: false,
				legendCallback: function (chart) {
					let text = []
					text.push('<ul>')
					for (let i = 0; i < chart.data.labels.length; i++) {
						text.push('<li>')
						text.push(
							'<span style="background-color:' +
								chart.data.datasets[0].backgroundColor[i] +
								'"></span>'
						)
						text.push(chart.data.labels[i])
						text.push('</li>')
					}
					text.push('</ul>')
					return text.join('')
				}
			},
			aspectRatio: 1,
			cutout: '74%',
			rotation: -5.5 * Math.PI,
			tooltips: {
				callbacks: {
					title: function (tooltipItem, data) {
						return data.labels[tooltipItem[0].index]
					}
				}
			}
		}
	})
}
