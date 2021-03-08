const getInputValues = () => {
  const name = document.querySelector("#name").value;
  const surname = document.querySelector("#surname").value;
  const email = document.querySelector("#email").value;
  const service = document.querySelector("#service").value;

  return { name, surname, email, service };
};

const insertValues = ({ name, surname, email, service }) => {
  document.querySelector("#output").innerHTML =
    `<p>${name}</p>` +
    `<p>${surname}</p>` +
    `<p>${email}</p>` +
    `<p>${service}</p>`;
};

const output = () => {
  const inputValues = getInputValues();
  insertValues(inputValues);
};
