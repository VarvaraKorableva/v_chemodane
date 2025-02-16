import './Presentation.css'

function Presentation() {
    return(
        <section className="presentation__section">
            <div className="presentation__first-pic"></div>
            <div className="presentation__title-container">
                <div className="presentation__left-pic"></div>
                <div className="presentation__text-container">
                    <p className="presentation__text">Семейный книжный фестиваль <span className='no-wrap'>«В Чемодане»</span> представляет:</p>
                    <h2 className="presentation__title presentation__bold">«Пурим в музее»</h2>
                    <p className="presentation__text presentation__bold">16 марта, с 12:00 до 22:00</p>
                    <p className="presentation__text">АНУ – Музей еврейского народа, Тель-Авив</p>
                    <div className='presentation__fourhorizontalsquares'></div>
                </div>
                <div className="presentation__right-pic"></div>
            </div>
            <h3>Что в программе?</h3>
            <div>
            <ul className="presentation__wrapper">
                <li className="presentation__li">
                    <div className="presentation__li-arrow importantNotes__triangle-pink-violet"></div>
                    <div className="presentation__li-text-container">
                        <div>
                        <p className="presentation__li-title">Израильская премьера спектакля «Вещи»,</p>
                            <span className="presentation__li-text"> специально приехавшего к нам из Лондона. Режиссёр Сергей Карабань и актриса Дина Бердникова представят постановку, в которой каждое воспоминание оживает через личные истории.  
                                <a className="presentation__li-link" href='https://bukutoku.com/theatreprogramme' target="_blank" rel="noopener noreferrer"> https://bukutoku.com/theatreprogramme</a>
                            </span>
                        
                        <p className="presentation__li-notes">Подробности в разделе</p>
                        <a href="#importantNotes" className="presentation__li-btn">Важные примечания</a>
                        </div>
                        <div className="presentation__li-triangles"></div>
                    </div>
                </li>

                <li className="presentation__li">
                    <div className="presentation__li-arrow importantNotes__triangle-yellow-violet"></div>
                    <div className="presentation__li-text-container">
                        <div>
                        <p className="presentation__li-title">«Бабушка Фрида» — детский спектакль от театра «Давай»</p>
                            <span className="presentation__li-text">Весёлый спектакль, который придётся по душе как ивритоязычным, так и русскоязычным детям и взрослым. 
                                <a className="presentation__li-link" href='https://davai-group.org/' target="_blank" rel="noopener noreferrer"> https://davai-group.org/</a>
                            </span>
                        </div>
                        <div className="presentation__li-triangles"></div>
                    </div>
                </li>

                <li className="presentation__li">
                    <div className="presentation__li-arrow importantNotes__triangle-blue-violet"></div>
                    <div className="presentation__li-text-container">
                        <div>
                        <p className="presentation__li-title">Театрализованная читка детской книги «Я — это Я» от книжного клуба «Букутоку» </p>
                            <span className="presentation__li-text">Актриса Дина Бердникова прочитает несколько глав, а автор книги Мария Дубова расскажет историю её создания. Эта озорная книжка способна заинтересовать и детей, и их родителей. 
                                <a className="presentation__li-link" href='https://bukutoku.com/' target="_blank" rel="noopener noreferrer"> https://bukutoku.com/</a>
                            </span>
                        </div>
                        <div className="presentation__li-triangles"></div>
                    </div>
                </li>

                <li className="presentation__li">
                    <div className="presentation__li-arrow importantNotes__triangle-yellow-blue1"></div>
                    <div className="presentation__li-text-container">
                        <div>
                            <p className="presentation__li-title">Мастер-классы для детей и взрослых:</p>
                            <span className="presentation__li-text">– Мастер-класс по анимации от студии «Синий домик»  
                                <a className="presentation__li-link" href='https://www.littleblue.space' target="_blank" rel="noopener noreferrer"> https://www.littleblue.space</a>
                                </span>
                            <span className="presentation__li-text">– Мастер-класс по созданию индивидуального украшения от Аси Финкельштейн   
                                <a className="presentation__li-link" href='https://www.instagram.com/finkel__shtein/' target="_blank" rel="noopener noreferrer"> https://www.instagram.com/finkel__shtein/</a>
                            </span>
                            <span className="presentation__li-text">– И многое другое</span>
                        </div>
                        <div className="presentation__li-triangles"></div>
                    </div>
                </li>

                <li className="presentation__li">
                    <div className="presentation__li-arrow importantNotes__triangle-lightblue-blue"></div>
                    <div className="presentation__li-text-container">
                        <div>
                            <p className="presentation__li-title">Весёлые подвижные игры</p>
                            <span className="presentation__li-text">Проверьте себя в Квиддиче и в боях на мечах </span>
                        </div>    
                        <div className="presentation__li-triangles"></div>
                    </div>
                </li>

                <li className="presentation__li">
                    <div className="presentation__li-arrow importantNotes__triangle-blue-pink"></div>
                    <div className="presentation__li-text-container">
                        <div>
                            <p className="presentation__li-title">Книжный маркет</p>
                            <span className="presentation__li-text">Новинки литературы на русском языке для детей и взрослых </span>
                        </div>    
                        <div className="presentation__li-triangles"></div>
                    </div>
                </li>

                <li className="presentation__li">
                    <div className="presentation__li-arrow importantNotes__triangle-pink-yellow"></div>
                    <div className="presentation__li-text-container">
                        <div>
                            <p className="presentation__li-title">Литературная программа для взрослых и подростков</p>
                            <span className="presentation__li-text">– Круглый стол: встреча профессиональных издателей и владельцев книжных магазинов с обсуждением перспектив развития русскоязычного книжного рынка в Израиле.</span>
                            <span className="presentation__li-text">– Встреча с писательницей Евгенией Пастернак </span>
                            <span className="presentation__li-text">– Презентация нового издания романа Ури Орлева “Зверь из темноты”  
                                <a className="presentation__li-link" href='https://www.littleblue.space' target="_blank" rel="noopener noreferrer"> https://samokatbook.ru/book/zver-iz-temnoty/?utm_source=telegram&utm_medium=organic&utm_campaign=legends</a>
                            </span>
                            <span className="presentation__li-text">– Представляет переводчик романа Рина Юсин-Фульмахт</span>
                        </div>    
                        <div className="presentation__li-triangles"></div>
                    </div>
                </li>

                <li className="presentation__li">
                    <div className="presentation__li-arrow importantNotes__triangle-yellow-lightblue"></div>
                    <div className="presentation__li-text-container">
                        <div>
                            <p className="presentation__li-title">Парад костюмов и дискотека</p>
                            <span className="presentation__li-text">Мечта каждого – пройти по красной дорожке в пуримском наряде и танцевать на настоящей дискотеке. Ждем вас в пуримских нарядах</span>
                            </div>
                        <div className="presentation__li-triangles"></div>
                    </div>
                </li>

                <li className="presentation__li">
                    <div className="presentation__li-arrow importantNotes__triangle-lightblue-violet"></div>
                    <div className="presentation__li-text-container">
                        <div>
                            <p className="presentation__li-title">Фотозона со специальной костюмерной и профессиональным макияжем от профессионального театрального гримера.</p>
                            <p className="presentation__li-notes">Подробности в разделе</p>
                            <a a href="#importantNotes" className="presentation__li-btn">Важные примечания</a>
                        </div>
                        <div className="presentation__li-triangles"></div>
                    </div>
                </li>

                <li className="presentation__li">
                    <div className="presentation__li-arrow importantNotes__triangle-violet-pink"></div>
                    <div className="presentation__li-text-container">
                        <div>
                            <p className="presentation__li-title">Экскурсии по музею «Как праздновали Пурим в разных диаспорах»</p>
                            <span className="presentation__li-text">– Детская театрализованная экскурсия с Александрой Андреевой</span>
                            <span>– Взрослая экскурсия с гидом Асей Фикс</span>
                        </div>
                        <div className="presentation__li-triangles"></div>
                    </div>
                </li>

                <li className="presentation__li">
                    <div className="presentation__li-arrow importantNotes__triangle-pink-violet"></div>
                    <div className="presentation__li-text-container">
                        <div>
                            <p className="presentation__li-title">Дегустация вина</p>
                        </div>
                        <div className="presentation__li-triangles"></div>
                    </div>
                </li>

                <li className="presentation__li">
                    <div className="presentation__li-arrow importantNotes__triangle-blue-violet"></div>
                    <div className="presentation__li-text-container">
                        <div>
                            <p className="presentation__li-title">Студия Линогравюры Ильи Diliago Викторова «Оттиск-шмоттиск»</p>
                            <span className="presentation__li-text">   
                                <a className="presentation__li-link" href='https://www.ottiskshmottisk.com/ ' target="_blank" rel="noopener noreferrer"> https://www.ottiskshmottisk.com/ </a>
                            </span>
                        
                            <p className="presentation__li-notes">Подробности в разделе</p>
                            <a href="#importantNotes" className="presentation__li-btn">Важные примечания</a>
                        </div>  
                        <div className="presentation__li-triangles presentation__li-triangles-last-of-type"></div>  
                    </div>
                </li>
            </ul>
            </div>

            <div className='presentation__presentationsquares'></div>
        </section>
    )
}

export default Presentation