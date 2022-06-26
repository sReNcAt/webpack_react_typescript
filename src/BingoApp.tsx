import React, { useEffect } from 'react'

export default function StoneApp() {
    
    let noticeStyle = {
        color : "#999"
    };
    
    let widthFullStyle = {
        width : "100%"
    };
    
    async function test() {
        await new Promise<void>((resolve) => {
            setTimeout(() => {
                resolve()
            }, 1000)
        })

        console.log('Bingo Page Done.')
    }

    useEffect(() => {
        test()
    }, [])

    return (<div id="index">
    <section className="page-section portfolio" id="picture">
        <div className="container">
            <div id="mainNotice">
                <h6 style={noticeStyle}>NOTICE</h6>
            </div>
            <div id="mainContent">
	            <h5 className="text-center text-uppercase mb-0">빙고</h5>
	
	            <div className="divider-custom">
	                <div className="divider-custom-line"></div>
	                <div className="divider-custom-icon">
	                    <i className="fas fa-star"></i>
	                </div>
	                <div className="divider-custom-line"></div>
	            </div>
	
	            <div className="row">
	                <div className="col-md-6 col-lg-4">
	                    <div className="portfolio-item mx-auto">
	                        <p>
	                        </p>
	                    </div>
	                </div>
	            </div>
			</div>
        </div>
    </section>
</div>);
}