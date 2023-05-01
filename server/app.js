const app = require("express")();
const PORT = process.env.MAIN_PORT || 4000;

app.listen(PORT, () => {
  console.log(`app running on PORT ${PORT}`);
});
