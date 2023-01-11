
const MapList = ({item})=>{
    return(
        <article className="section__article">
            <header className="article__header">
                <h3 className="header__h3">Name : {item.name}</h3> 
            </header>
            <footer className="article__footer">
                <section className="article__section">
                    <span className="section__span">Status :    {item.status}</span>
                    <span className="section__span">Gender :    {item.gender}</span>
                </section>
                <img src={item.image} className="main__img"/>
            </footer>       
        </article>
    )
}
export { MapList }