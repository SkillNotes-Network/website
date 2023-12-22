export default class DateModel {
	curr;
	year;
	month;
	day;

	constructor(year, month, day) {
		this.curr = new Date().getFullYear();
		this.year = year;
		this.month = month;
		this.day = day;
	}

	getMonths() {
		return [
			{
				value: '01',
				label: 'January'
			},
			{
				value: '02',
				label: 'February'
			},
			{
				value: '03',
				label: 'March'
			},
			{
				value: '04',
				label: 'April'
			},
			{
				value: '05',
				label: 'May'
			},
			{
				value: '06',
				label: 'June'
			},
			{
				value: '07',
				label: 'July'
			},
			{
				value: '08',
				label: 'August'
			},
			{
				value: '09',
				label: 'September'
			},
			{
				value: '10',
				label: 'October'
			},
			{
				value: '11',
				label: 'November'
			},
			{
				value: '12',
				label: 'December'
			},
		];
	}

	getDays() {
		const days = [];

		switch (this.month) {
			case '01':
			case '03':
			case '05':
			case '07':
			case '08':
			case '10':
			case '12':
					this.calcDays(days);
				break;
			case '04':
			case '06':
			case '09':
			case '11':
					this.calcDays(days, 30);
				break;
			case '02':
					if (this.year !== '') {
						(this.isLeapYear(this.year)) ? this.calcDays(days, 29) : this.calcDays(days, 28);
					} else {
						this.calcDays(days, 29);
					}
				break;
			default:
					this.calcDays(days);
				break;
		}
		
		return days;
	}

	getYears() {
		const years = [];
		
		if (this.month === '02') {
			(this.day === '29') ? this.calcYear(years, true) : this.calcYear(years);
		} else {
			this.calcYear(years);
		}

		return years;
	}

	calcDays(arr = [], maxDays = 31) {
		for (let i = 1; i <= maxDays; i++) arr.push({ value: i, label: i });
	}

	calcYear(arr = [], testLy = false, ly = this.curr) {
		if (!testLy) {
			for (let i = ly; i > ly - 120; i--) {
				arr.push({ value: i, label: i });
			}
		} else {
			if (!this.isLeapYear(ly)) {
				for (let i = ly; i > ly - 120; i--) {
					if (this.isLeapYear(i)) {
						arr.push({ value: i, label: i });
					}
				}
			} else {
				this.calcYear(arr, true, ly - 1);
			}
		}
	};

	isLeapYear(inputYear) {
		return (inputYear % 400 === 0) ? true : (inputYear % 100 === 0) ? false : (inputYear % 4 === 0);
	}
}