const Database = require('./db.js');
const saveOrphanage = require('./saveOrphanage.js');

Database.then(async (db) => {
  // inserir dados na table
  await saveOrphanage(db, {
    lat: "-27.222633",
    lng: "-49.6555874",
    name:"Local dos Meninos",
    about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de riscou e/ou vulnerabilidade social.",
    whatsapp: "999008888",
    images: [
      "https://images.unsplash.com/photo-1592840330988-3c88e47c1aac?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

      "https://images.unsplash.com/photo-1601180964854-4159eae306bb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    ].toString(),
    instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "Horário de visitas das 8h as 18h.",
    open_on_weekends: "0"
  })
  // // consultar dados da tabela
  const selectedOrphanages = await db.all("SELECT * FROM orphanages")
  console.log(selectedOrphanages)

  //consultar por id´s
  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
  console.log(orphanage)

  // deletar dado da tabela
  console.log(await db.run("DELETE FROM orphanages WHERE id = '2'"))
  console.log(await db.run("DELETE FROM orphanages WHERE id = '3'"))
})