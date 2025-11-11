/**
 * Generate a page section
 * @param sectionData{PageSectionData}
 * @param siteData{SiteData}
 * @constructor
 */
function Section({sectionData}) {
    return (
        <div className="row">
            {sectionData.SectionTitle && sectionData.ShowTitle && (
                <div className="col-sm-12"><h2 className={'text-' + sectionData.TitleAlign}>{sectionData.SectionTitle}</h2></div>
            )}
            {sectionData.SectionImage && sectionData.ShowImage &&  sectionData.ImagePosition === 'above' && (
                <div className={`img-responsive w-100 h-auto`}>
                <img className="section-image" src={'images/' + sectionData.SectionImage} alt={sectionData.SectionTitle}/>
                </div>
            )}
            {sectionData.SectionText && sectionData.SectionText.length && sectionData.ShowText && (
                <div className={`page-section col-sm-12 clearfix text-${sectionData.TextAlign}`}
                     dangerouslySetInnerHTML={{__html: sectionData.SectionText}}/>
            )}
        </div>
    );
}

export default Section;