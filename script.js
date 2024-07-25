const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.post('/validate', (req, res) => {
  const { name, email } = req.body;

  if (name === '' || email === '') {
    res.json({ valid: false, error: 'Please fill in all fields.' });
    return;
  }

  if (!validateEmail(email)) {
    res.json({ valid: false, error: 'Invalid email address.' });
    return;
  }

  // Perform additional server-side validation here
  // ...

  res.json({ valid: true });
});

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});