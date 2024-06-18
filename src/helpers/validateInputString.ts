// Checking data to be a string
export const validateInputString = (str: string): boolean => {
  const regex = /^[a-zA-Z0-9@._\- !?,;:()а-яА-ЯёЁ]*$/ // Добавил пару символов и кириллицу
  return typeof str === 'string' && regex.test(str)
}
