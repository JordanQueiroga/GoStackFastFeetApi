import jwt from 'jsonwebtoken';
import * as Yup from 'yup';
import User from '../models/User';

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res
        .status(400)
        .json({ error: 'Email não pertence a nenhum usuário cadastrado!' });
    }

    if (!user.checkPassword(password)) {
      return res.status(401).json({ error: 'Senha inválida!' });
    }

    const { id, name } = user;
    return res.json({
      user: {
        id,
        name,
        email,
        token: jwt.sign({ id }, '01afa2c65a03476a66d7f97003e2620c', {
          expiresIn: '7d', // sete dias
        }),
      },
    });
  }
}

export default new SessionController();
