import React, { useEffect, useState } from "react";
import menu from "../../data/menu.json"
import "./Menu.css";
import { motion } from "framer-motion";

const Menu = () => {

    const [categoriaAtiva, setCategoriaAtiva] = useState(0);

    useEffect(() => {
        console.log(categoriaAtiva)
    }, [])

    return (
        <div className="menu-section">

            <div className="menu-container">

                <h1 className="menu-title">Nosso Cardápio</h1>

                <div className="menu-tabs">
                    {menu.categorias.map((cat, index) => (
                        <button
                            key={index}
                            className={categoriaAtiva === index ? "active" : ""}
                            onClick={() => setCategoriaAtiva(index)}
                        >
                            {cat.nome}
                        </button>
                    ))}
                </div>

                <motion.div
                className="menu-grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                >

                    {menu.categorias[categoriaAtiva].itens.map((item, index) => (

                        <div className="menu-card" key={index}>

                            <img
                                src={item.imagem}
                                alt={item.nome}
                                loading="lazy"
                            />

                            <div className="menu-info">

                                <h3>{item.nome}</h3>

                                <p>{item.descricao}</p>

                                <span>R$ {item.preco}</span>
                            
                            </div>

                        </div>

                    ))}

                </motion.div>

            </div>
        </div>
    );
};

export default Menu;