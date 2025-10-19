import Container from '../../../UI-Kit/Container/Container'
import Heading from '../../../UI-Kit/Heading/Heading'
import { useState } from "react";
import { register, getAllUsers } from "../../../API/Api";
import './RegistrationForm.css'

export default function RegistrationForm() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
    subscribed: true,
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await register(form);
      
      //<h2 className="title">успех</h2>
      setMessage("Регистрация прошла успешно ✅");
        setForm({
          username: "",
          email: "",
          password: "",
          phone: "",
          subscribed: true,
        });

      
    } catch (err) {
      if (err && err.msg === 'Email is already registered') {
        setMessage(`Email ${form.email} уже зарегистрирован`);
      } else {
        setMessage("Ошибка регистрации ❌, попробуйте еще раз");
      }
      
      console.error(err);
    }
  };

  const handleGetAllUsers = async() => {
    try {
      const data = await getAllUsers()
      console.log(data)
    }
    catch (err) {
      console.error(err);
    }
  }

  const isFormValid = form.username.trim() && form.email.trim() && form.password.trim();

  return (
    <Container>
        <h2 className="title">Регистрационная форма подписки на новости</h2>
        <h3 className="sub__title">Подпишись на нашу новостную рассылку, чтобы узнавать первым о новых мероприятиях и акциях фестиваля.</h3>
    <form onSubmit={handleSubmit} className='RegistrationForm__form'>
      <div className='RegistrationForm__container'>
        <label className='text'>Имя и Фамилия</label>
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          required
          className='RegistrationForm__input'
        />
      </div>

      <div className='RegistrationForm__container'>
        <label className='text'>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className='RegistrationForm__input'
        />
      </div>

      <div className='RegistrationForm__container'>
        <label className='text'>Пароль</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
          className='RegistrationForm__input'
        />
      </div>

      <div className='RegistrationForm__container'>
        <label className='text'>Телефон</label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          className='RegistrationForm__input'
        />
      </div>

      <div className='RegistrationForm__container'>
        <label className='text RegistrationForm__checkbox'>
          <input
            type="checkbox"
            name="subscribed"
            checked={form.subscribed}
            onChange={handleChange}
            className='checkbox'
          />
          Я согласен(а) получать электронные письма от фестиваля "В чемодане"
        </label>
      </div>

      <button 
          type="submit"           
          className={`RegistrationForm__button ${!isFormValid ? 'disabled' : ''}`}
          disabled={!isFormValid}
      >
        Подписаться
      </button>
      {message && <p>{message}</p>}
    </form>
    {/*<button onClick={handleGetAllUsers}>Получить всех клиентов</button>*/}
    </Container>   
  );
}
