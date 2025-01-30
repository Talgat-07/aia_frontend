import { useState, useEffect } from "react";
import styles from "./ContactForm.module.scss";
import { CustomButton, Typography } from "..";
import { SubmitApprovedIcon } from "assets/icons/SubmitApprovedIcon.jsx";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "utils/helpers/schemaYup.js";
import PhoneInput from "react-phone-input-2";
import countries from "world-countries";

export const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [countryList, setCountryList] = useState([]);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const countryOptions = countries.map((country) => ({
      code: country.cca2,
      name: country.translations.rus?.common || country.name.common,
    }));

    countryOptions.sort((a, b) => a.name.localeCompare(b.name));

    setCountryList(countryOptions);
  }, []);

  const onSubmit = (data) => {
    console.log(data);
    reset();
    setIsSubmitted(true);
  };

  const handleSubmitForm = () => {
    setIsSubmitted(false);
  };

  const handlePhoneChange = (value) => {
    setValue("phone", value);
    trigger("phone");
  };

  return (
     <div className={`${styles.wrapper}`}>
       <div className={styles.modalBox}>
         {isSubmitted ? (
            <div className={styles.successMessage}>
              <SubmitApprovedIcon />
              <div className={styles.successContent}>
                <Typography variant="h2" weight="semibold">
                  Спасибо за доверие!
                  <br />
                  Ваша заявка отправлена
                </Typography>
                <Typography variant="bodyXS" weight="regular">
                  Ожидайте, скоро с Вами свяжутся
                </Typography>
                <CustomButton onClick={handleSubmitForm} buttonStyles="customButtonBrown" text="Закрыть" />
              </div>
            </div>
         ) : (
            <>
              <div className={styles.modalHeader}>
                <Typography variant="h2" weight="semibold">
                  Напишите нам
                </Typography>
                <Typography weight="medium" variant="bodyXS">
                  И мы ответим на любые интересующие вас вопросы
                </Typography>
              </div>
              <div className={styles.modalContent}>
                <form className={styles.modalForm} onSubmit={handleSubmit(onSubmit)}>
                  <div className={styles.modalFormInputs}>
                    <div className={styles.FormArea}>
                      <input
                         id="name"
                         {...register("username", { required: "Введите ФИО" })}
                         type="text"
                         className={`${styles.input} ${errors.username && styles.error}`}
                         placeholder=" "
                      />
                      <div className={styles.labelline}>
                        ФИО <span>*</span>
                      </div>
                    </div>

                    <div className={styles.FormArea}>
                      <select
                         id="country"
                         {...register("country", { required: "Выберите страну" })}
                         className={`${styles.select} ${errors.country && styles.error}`}
                         defaultValue=""
                      >
                        <option value="" disabled>
                          Выберите страну
                        </option>
                        {countryList.map((country) => (
                           <option key={country.code} value={country.name}>
                             {country.name}
                           </option>
                        ))}
                      </select>
                      {errors.country && <p className={styles.errorText}>{errors.country.message}</p>}
                    </div>

                    <div className={styles.FormArea}>
                      <PhoneInput
                         value=""
                         onChange={handlePhoneChange}
                         country={null}
                         id="phone"
                         type="tel"
                         className={`${styles.input} ${errors.phone && styles.error} ${styles.inputphone}`}
                         placeholder=" "
                      />
                      <label htmlFor="phone" className={styles.labelline}>
                        (996) 556 - 123 - 456 <span>*</span>
                      </label>
                    </div>

                    <div className={styles.FormArea}>
                      <input
                         id="email"
                         {...register("email", { required: "Введите email" })}
                         type="email"
                         className={`${styles.input} ${errors.email && styles.error}`}
                         placeholder=" "
                      />
                      <div className={styles.labelline}>
                        email <span>*</span>
                      </div>
                    </div>
                  </div>

                  <div className={styles.modalFormArea}>
                    <textarea id="question" {...register("question")} className={styles.textarea} placeholder="Ваш вопрос" />
                    <CustomButton type="submit" buttonStyles="wideButton" text="Отправить" />
                  </div>
                </form>
              </div>
            </>
         )}
       </div>
     </div>
  );
};
