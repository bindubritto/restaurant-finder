import React from 'react';
import './App.css';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';

function App() {
    return (
        <div className="App">
            <Layout>
                <Header />
                <Body />
                <Footer />
            </Layout>
        </div>
    );
}

export default App;
