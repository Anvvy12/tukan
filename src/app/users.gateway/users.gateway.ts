export const getUsers = async () => {
  try {
    const response = await fetch("https://tz.smart-ui.pro/");
    if (response.ok) {
      const data = await response.json();
      return data.users;
    } else {
      console.error("Ошибка при получении данных");
    }
  } catch (error) {
    console.error("Произошла ошибка", error);
  }
};
