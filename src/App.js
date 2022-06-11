import { Container } from "reactstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState} from "react";
import firebaseAuth from "./config/firebaseAuth";
import AuthContext from "./contexts/AuthContexts";




function App() {
    const [authenticatedUser, setAuthenticatedUser] = useState(null);
    useEffect(() => {
        onAuthStateChanged(firebaseAuth, (user) => {
            // setAuthenticatedUser(user);
            setAuthenticatedUser(user);
        });
    }, []);

    return (
        <AuthContext.Provider value={authenticatedUser}>
            <BrowserRouter>
                <Navbar />

                <Container className="pt-5">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Routes>

                </Container>
            </BrowserRouter>

        </AuthContext.Provider>
    );

};

export default App;
