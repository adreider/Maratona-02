module.exports = {
	remainingDays(job) {
		// cálculo de tempo restante
		const remainingDays = (job['total-hours'] / job['daily-hours']).toFixed();

		const createdDate = new Date(job.created_at);
		const dueDay = createdDate.getDay() + Number(remainingDays);
		const dueDateInMs = createdDate.setDate(dueDay);

		const timeDiffInMs = dueDateInMs - Date.now();
		// transformar milli em dias
		const dayInMs = 1000 * 60 * 60 * 24;
		const dayDiff = Math.floor(timeDiffInMs / dayInMs);

		// restam x dias
		return dayDiff;
	},
  
	calculateBudget: (job, valueHours) => valueHours * job['total-hours'],
};
