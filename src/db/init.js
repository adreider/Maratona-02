const Database = require('./config');
const initDb = {
	async init() {
		//abrir a conexao com o banco de dados
		const db = await Database();

		await db.exec(`CREATE TABLE profile (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  avatar TEXT,
  monthly_budget INT,
  days_per_week INT,
  hours_per_day INT,
  vacation_per_year INT,
  value_hour INT
  )`);

		await db.exec(`CREATE TABLE jobs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  daily_hours INT,
  total_hours INT,
  created_at DATETIME
)`);

		await db.run(`INSERT INTO profile (
  name, 
  avatar,
  monthly_budget,
  days_per_week,
  hours_per_day,
  vacation_per_year,
  value_hour 
) VALUES (
  "Adriano",
  "https://avatars.githubusercontent.com/u/72398114?v=4",
  300,
  5,
  5,
  4,
  70
);`);

		await db.run(`INSERT INTO jobs (
  name,
  daily_hours,
  total_hours,
  created_at
) VALUES (
  "Dahma vindo do banco",
  3,
  47,
  1617514376018
);`);

		// fechar a conexao com o banco de dados
		await db.close();
	},
};

initDb.init();
//********** IMPORTANTE ************//
//sql são comandos de banco de dados

// CREATE TABLE profile (
//                      id INTEGER KEY AUTOINCREMENT
//                      name TEXT,
//                      avatar TEXT,
//                      monthly-budget INT,
//                      days-per-week INT,
//                      hours-per-day INT,
//                      vacation-per-year INT,
//                      value-hour INT
//                      )
