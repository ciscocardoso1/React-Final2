import React from 'react'
import './Items.css'
import imagen0 from './img/imagen0.JPG';
import imagen5 from './img/imagen5.JPG';
import imagen2 from './img/imagen2.JPG';
import imagen3 from './img/imagen3.JPG';
import imagen7 from './img/imagen7.JPEG';
import imagen8 from './img/imagen8.JPG';

const Items = () => {
    return (
        <>
            <h1 className='title'> Productos </h1>
            <div className='items'>
                <div className='item'>

                    <div className="itemImg">
                        <img src={imagen0} alt="" />
                    </div>

                    <div className="itemFooter">
                        <h1> Titel </h1>
                        <p> Categoria</p>
                        <p className='price'>$320</p>
                    </div>
                    <div className="buttom">
                        <button className='btn'>
                            Añadir al carrito
                        </button>
                    </div>
                </div>
                {/* ----------------------------------------- */}
                <div className='item'>
                    <div className="itemImg">
                        <img src={imagen5} alt="" />
                    </div>

                    <div className="itemFooter">
                        <h1> Titel </h1>
                        <p> Categoria</p>
                        <p className='price'>$320</p>
                    </div>
                    <div className="buttom">
                        <button className='btn'>
                            Añadir al carrito
                        </button>
                    </div>
                </div>
                {/* -------------------- */}
                <div className='item'>

                    <div className="itemImg">
                        <img src={imagen2} alt="" />
                    </div>

                    <div className="itemFooter">
                        <h1> Titel </h1>
                        <p> Categoria</p>
                        <p className='price'>$320</p>
                    </div>
                    <div className="buttom">
                        <button className='btn'>
                            Añadir al carrito
                        </button>
                    </div>
                </div>
                {/* ------------------------- */}
                <div className='item'>

                    <div className="itemImg">
                        <img src={imagen3} alt="" />
                    </div>

                    <div className="itemFooter">
                        <h1> Titel </h1>
                        <p> Categoria</p>
                        <p className='price'>$320</p>
                    </div>
                    <div className="buttom">
                        <button className='btn'>
                            Añadir al carrito
                        </button>
                    </div>
                </div>
                {/* ------------------------- */}
                <div className='item'>

                    <div className="itemImg">
                        <img src={imagen7} alt="" />
                    </div>

                    <div className="itemFooter">
                        <h1> Titel </h1>
                        <p> Categoria</p>
                        <p className='price'>$320</p>
                    </div>
                    <div className="buttom">
                        <button className='btn'>
                            Añadir al carrito
                        </button>
                    </div>
                </div>

                {/* ------------------------- */}
                <div className='item'>

                    <div className="itemImg">
                        <img src={imagen8} alt="" />
                    </div>

                    <div className="itemFooter">
                        <h1> Titel </h1>
                        <p> Categoria</p>
                        <p className='price'>$320</p>
                    </div>
                    <div className="buttom">
                        <button className='btn'>
                            Añadir al carrito
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Items