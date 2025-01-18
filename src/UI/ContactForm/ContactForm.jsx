import { useState } from "react";
import { useModal } from "utils/hooks/useModal";
import styles from "./ContactForm.module.scss";
import { CustomButton, Typography } from "..";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    country: "",
    phone: "",
    email: "",
    question: "",
  });

  const [errors, setErrors] = useState({});
  const { isVisible, openModal, closeModal } = useModal();

  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "ФИО обязательно";
    if (!formData.country.trim()) newErrors.country = "Страна обязательна";
    if (!formData.phone.trim()) newErrors.phone = "Телефон обязателен";
    if (!/^\+996\d{9}$/.test(formData.phone))
      newErrors.phone = "Введите телефон в формате +996556123456";
    if (!formData.email.trim()) newErrors.email = "Email обязателен";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Введите корректный email";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      openModal();
      setFormData({
        fullName: "",
        country: "",
        phone: "",
        email: "",
        question: "",
      });
      setErrors({});
    }
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(true);
  };

  const closeForm = () => {
    setIsFormVisible(false);
    setFormData({
      fullName: "",
      country: "",
      phone: "",
      email: "",
      question: "",
    });
    setErrors({});
  };

  return (
    <div className={styles.expandable_container}>
      <Typography variant="h2" weight="semibold">
        Напишите нам
      </Typography>
      <Typography className={styles.text} variant="bodyM">
        И мы ответим на любые интересующие вас вопросы
      </Typography>

      {!isFormVisible && (
        <div className={styles.description_block}>
          <div className={styles.left_column}></div>
          <div className={styles.right_column}>
            <label>
              <textarea
                name="question"
                value={formData.question}
                onChange={handleChange}
                placeholder="Введите ваш вопрос"
                onFocus={toggleFormVisibility}
              />
            </label>
          </div>
        </div>
      )}

      {isFormVisible && (
        <div
          className={`${styles.form} ${isFormVisible ? styles.form_visible : ""}`}
        >
          <button className={styles.closeButton} onClick={closeForm}>
            ×
          </button>

          <div className={styles.left_column}>
            <form onSubmit={handleSubmit}>
              <label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Ваше полное имя"
                />
                {errors.fullName && (
                  <span className={styles.error}>{errors.fullName}</span>
                )}
              </label>

              <label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Введите страну, город"
                />
                {errors.country && (
                  <span className={styles.error}>{errors.country}</span>
                )}
              </label>

              <label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+996556123456"
                />
                {errors.phone && (
                  <span className={styles.error}>{errors.phone}</span>
                )}
              </label>

              <label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@domain.com"
                />
                {errors.email && (
                  <span className={styles.error}>{errors.email}</span>
                )}
              </label>
            </form>
          </div>

          <div className={styles.right_column}>
            <label>
              <textarea
                name="question"
                value={formData.question}
                onChange={handleChange}
                placeholder="Введите ваш вопрос"
              />
              <CustomButton
                onClick={handleSubmit}
                text="Отправить..."
                buttonStyles="customButtonBrown"
              />
            </label>
          </div>
        </div>
      )}

      {isVisible && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <button className={styles.closeButton} onClick={closeModal}>
              ×
            </button>
            <Typography variant="h2" weight="semibold">Спасибо за доверие!Ваша заявка отправлена.</Typography>
            <Typography variant="bodyM">Ожидайте, скоро с Вами свяжутся.</Typography>
            <CustomButton
              buttonStyles="customButtonBrown"
              onClick={closeModal}
            >
              Закрыть
            </CustomButton>
          </div>
        </div>
      )}
    </div>
  );
};
