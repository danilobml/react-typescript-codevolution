import React from "react";
import "./App.css";
import Greet from "./components/Greet";
import PersonList from "./components/PersonList";
import Person from "./components/Person";
import Status from "./components/Status";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Button from "./components/Button";
import Input from "./components/Input";
import Container from "./components/Container";
import LoggedIn from "./components/LoggedIn";
import User from "./components/User";
import Counter from "./components/Counter";
import Box from "./context/Box";
import { ThemeContextProvider } from "./context/themeContext";
import { UserContextProvider } from "./context/UserContext";
import UserComp from "./context/UserComp";
import DomRef from "./ref/DomRef";
import MutableRef from "./ref/MutableRef";
import ClassCounter from "./components/class/ClassCounter";
import Private from "./components/auth/Private";
import Profile from "./components/auth/Profile";
import List from "./components/generics/List";
import RandomNumber from "./components/restricted/RandomNumber";
import Toast from "./components/templatelitrals/Toast";
import ButtonHTML from "./components/html/ButtonHTML";
import InputHTML from "./components/html/InputHTML";

function App() {
	const personName = {
		first: "Joe",
		last: "Perry",
	};

	const personList = [
		{
			first: "Moe",
			last: "Sickmore",
		},
		{
			first: "Jim",
			last: "Prickmore",
		},
		{
			first: "Jeb",
			last: "Dickmore",
		},
	];

	return (
		<div className="App">
			<h1>Hey Mofo!</h1>
			<Greet name="Dan" messageCount={10} isLogged={true} />
			<Person personName={personName} />
			<PersonList personList={personList} />
			<Status status="success" />
			<Oscar>
				<Heading>Oscar goes to Dicaprio</Heading>
			</Oscar>
			<Button handleClick={(event, id) => console.log(event, id)} />
			<Input value="" handleChange={(event) => console.log(event.target.value)} />
			<Container styles={{ border: "1px solid black", padding: "1rem" }} />
			<LoggedIn />
			<User />
			<Counter />
			<ThemeContextProvider>
				<Box />
			</ThemeContextProvider>
			<UserContextProvider>
				<UserComp />
			</UserContextProvider>
			<DomRef />
			<MutableRef />
			<ClassCounter message="Class counter: " />
			<Private isLoggedin={true} component={Profile} />
			<List items={["ze", "pedro", "paulo"]} onClick={(value: string) => console.log(value)} />
			<RandomNumber value={10} isPositive />
			<Toast position="left-center" />
			<ButtonHTML variant="primary" style={{ color: "blue" }}>
				Bob
			</ButtonHTML>
			<InputHTML placeholder="Custom Input" />
		</div>
	);
}

export default App;
