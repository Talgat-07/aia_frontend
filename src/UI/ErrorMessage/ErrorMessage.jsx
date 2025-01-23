export const ErrorMessage = () => {
  return (
    <>
      <div
        style={{
          margin: "5% 10%",
          width: "80%",
          color: "red",
        }}
      >
        <Typography textAlign="center" variant="h2" weight="medium">
          Произошла ошибка при загрузке данных. Пожалуйста, попробуйте позже.
        </Typography>
      </div>
    </>
  );
};
