import { Button, Card, Label, TextInput } from "flowbite-react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

type Props = {};

function Signup({}: Props) {
  return (
    <div className="flex h-screen items-center justify-center sm:container sm:mx-auto">
      <div>
        <div className="main-logo mb-5">
          <img src={logo} alt="mytrip_logo" />
        </div>

        <Card className="auth-card m-5">
          <div className="m-3 text-4xl">Inscription</div>
          <form className="group flex max-w-md flex-col gap-4" noValidate>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="E-mail" />
              </div>
              <TextInput
                id="email1"
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
                className="peer invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                id="password1"
                required
                type="password"
                pattern=".{7,}"
              />
              <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                Ajouter un mot de passe de 7 caractères minimum
              </span>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password1" value="Confirmer mot de passe" />
              </div>
              <TextInput id="password2" required type="password" />
            </div>
            <Button
              className="mt-5 text-xs group-invalid:pointer-events-none group-invalid:opacity-30"
              color="lime"
              type="submit"
            >
              Connexion
            </Button>
          </form>
          <Link
            className="text-xs text-lime-500 hover:text-lime-600"
            to="/login"
          >
            Je connais mon mot de passe
          </Link>
        </Card>
      </div>
    </div>
  );
}

export default Signup;
