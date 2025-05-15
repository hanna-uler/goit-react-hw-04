import css from "./ImageCard.module.css"

export default function ImageCard({imageUrl, alt, authorImage, authorName, portfolioUrl, instagram, likes }) {
    
    const instaLink = `https://www.instagram.com/${instagram}`;
    return (
        <div>
            <img src={imageUrl} alt={alt} className={css.image} />
            <div className={css.cardInfo}>
                <div className={css.authorSection}>
                    <img src={authorImage} alt={authorName} className={css.authorAvatar} />
                    <div className={css.authorDetails}>
                        <a href={portfolioUrl} target="_blank" rel="noopener noreferrer" className={css.authorName}>
                            {authorName}
                        </a>
                        <a href={instaLink} target="_blank" rel="noopener noreferrer" className={css.authorInstagram}>
                            Instagram: @{instagram}
                        </a>
                    </div>
            </div>
                <div className={css.likes}>❤️ {likes}</div>
            </div>
        </div>
    )
};