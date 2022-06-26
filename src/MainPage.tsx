import React, { useEffect } from 'react'
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';


export default function MainPage() {
    
    let noticeStyle = {
        color : "#999"
    };
    
    let widthFullStyle = {
        width : "100%"
    };
    
    let displayNoneStyle = {
        display : "none"
    };
    
    async function test() {
        await new Promise<void>((resolve) => {
            setTimeout(() => {
                resolve()
            }, 1000)
        })

        console.log('Main Page')
    }

    useEffect(() => {
        test()
    }, [])

    return (
        <div id="index">
            <section className="page-section portfolio" id="picture">
                <div className="container">
                    <div id="mainNotice">
                        <h6 style={noticeStyle}>NOTICE</h6>
                        2022년 6월, React로 재단장 중입니다.<br/>
                    </div>
                    <div id="mainContent">
                        <h5 className="text-center text-uppercase mb-0">여백</h5>

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
                                        스팸봇 명령어<br/>
                                        %재련<br/>
                                        %마리상점<br/>
                                        %프로필 "캐릭터명"<br/>
                                        %거래소 "아이템명"<br/>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="searchContent" style={displayNoneStyle}>
                        <table className="table search-table" style={widthFullStyle}>
                            <colgroup>
                                <col width="15%" /><col width="35%"/>
                                <col width="15%" /><col width="35%"/>
                            </colgroup>
                            <thead>
                            </thead>
                            <tbody>
                                <tr>
                                    <th className=""></th>
                                    <td className="search-text c_level">2</td>
                                    <th className=""></th>
                                    <td className="search-text user_name">2</td>
                                </tr>
                                <tr>
                                    <th className=""></th>
                                    <td className="search-text server">2</td>
                                    <th className=""></th>
                                    <td className="search-text class">2</td>
                                </tr>
                                <tr>
                                    <th className=""></th>
                                    <td className="search-text level">2</td>
                                    <th className=""></th>
                                    <td className="search-text w_level">2</td>
                                </tr>
                                <tr>
                                    <th className=""></th>
                                    <td className="search-text guild">2</td>
                                    <th className=""></th>
                                    <td className="search-text title">2</td>
                                </tr>
                                <tr>
                                    <th className=""></th>
                                    <td className="search-text area" colSpan={3}>2</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>);
}