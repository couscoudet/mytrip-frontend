import { Button, Card, Label, TextInput } from "flowbite-react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

interface UserInterface {
  id?: undefined | number;
  name?: string;
  email?: string;
  password?: string;
}

function Login() {
  console.log(import.meta.env.VITE_GOOGLE_API_KEY);
  const [data, setData] = useState<UserInterface | undefined>({});

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    const newData: UserInterface = { ...data, [name]: value };
    setData(newData);
  };

  return (
    <div className="flex h-screen items-center justify-center sm:container sm:mx-auto">
      <div>
        <div className="main-logo mb-5">
          <img src={logo} alt="mytrip_logo" />
        </div>

        <Card className="auth-card m-5">
          <div className="m-3 text-4xl">Bienvenue</div>
          <form className="flex max-w-md flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="E-mail" />
              </div>
              <TextInput
                onChange={(e) => handleChange(e)}
                id="email1"
                name="email"
                value={data?.email}
                placeholder="email@mail.com"
                required
                type="email"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password1" value="Mot de passe" />
              </div>
              <TextInput
                onChange={(e) => handleChange(e)}
                name="password"
                id="password1"
                required
                type="password"
                value={data?.password}
              />
            </div>

            <Button className="mt-5 text-xs" color="lime" type="submit">
              Connexion
            </Button>
          </form>
          <Link
            className="text-xs text-lime-500 hover:text-lime-600"
            to="/signup"
          >
            Première Connexion
          </Link>
          <Link
            className="text-xs text-lime-500 hover:text-lime-600"
            to="/password-init"
          >
            Mot de passe oublié
          </Link>
        </Card>
      </div>
    </div>
  );
}

export default Login;
