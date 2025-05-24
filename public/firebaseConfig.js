import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

const form = document.getElementById('register-form');
const message = document.getElementById('message');

form.addEventListener('submit', async (e) => {
  e.preventDefault(); // evitar o reload da página

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    message.textContent = "Usuário registrado com sucesso!";
    form.reset();
  } catch (error) {
    message.textContent = `Erro: ${error.message}`;
  }
});
