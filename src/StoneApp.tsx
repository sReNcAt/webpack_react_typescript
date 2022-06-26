import React, { useEffect } from 'react'

export default function StoneApp() {

    let noticeStyle = {
        color : "#999"
    };

    let widthFullStyle = {
        width : "100%"
    };

    let f08important = {
        fontSize : "0.8rem !important"
    };

    let f07important = {
        fontSize : "0.7rem !important"
    };

    let f06important = {
        fontSize : "0.6rem !important"
    };

    let color5853EB = {
        color : "#5853EB"
    };

    let color2BA5BA = {
        color : "#2BA5BA"
    };

    let colorBA2B2B = {
        color : "#BA2B2B"
    };

    let btnProcStyle = {
        padding: "0.2rem",
        fontSize: "0.7rem !important"
    };

    let proba : number = 75;
    let stone_1 : number[] = [];
    let stone_2 : number[] = [];
    let stone_3 : number[] = [];

    let stone_1_cnt :number  = 0;
    let stone_2_cnt :number  = 0;
    let stone_3_cnt :number  = 0;

    async function drawScreen(){
        await new Promise<void>((resolve) => {
            if(stone_1.length>=10){
                const btnProcValue1 : NodeListOf<Element> = document.querySelectorAll('.btn-proc[data-value="1"]') 
                for (const sub of btnProcValue1 as any){
                    sub.disabled = true
                }
            }

            if(stone_2.length>=10){
                const btnProcValue2 : NodeListOf<Element> = document.querySelectorAll('.btn-proc[data-value="2"]') 
                for (const sub of btnProcValue2 as any){
                    sub.disabled = true
                }
            }

            if(stone_3.length>=10){
                const btnProcValue3 : NodeListOf<Element> = document.querySelectorAll('.btn-proc[data-value="3"]') 
                for (const sub of btnProcValue3 as any){
                    sub.disabled = true
                }
            }

            // 각인1
            let stone_1_ok = '';
            let stone_1_wait = '';
            for (let i=0; i<stone_1.length; i++){
                if(stone_1[i]==1){
                    stone_1_ok+="◆";
                }else if(stone_1[i]==0){
                    stone_1_ok+="◎";
                }
            }
            for (let i=0; i<10-stone_1.length; i++){
                stone_1_wait+="○";
            }
            const spanValue1TypeOK : NodeListOf<Element> = document.querySelectorAll('.div-stone[data-value="1"] span[data-type="ok"]') 
            for (const sub of spanValue1TypeOK as any){
                sub.innerHTML = stone_1_ok+stone_1_wait
            }

            const cntValue1 : NodeListOf<Element> = document.querySelectorAll('.cnt[data-value="1"]') 
            for (const sub of cntValue1 as any){
                sub.innerHTML = stone_1_cnt
            }

            // 각인2
            let stone_2_ok = '';
            let stone_2_wait = '';
            for (let i=0; i<stone_2.length; i++){
                if(stone_2[i]==1){
                    stone_2_ok+="◆";
                }else if(stone_2[i]==0){
                    stone_2_ok+="◎";
                }
            }
            for (let i=0; i<10-stone_2.length; i++){
                stone_2_wait+="○";
            }
            const spanValue2TypeOK : NodeListOf<Element> = document.querySelectorAll('.div-stone[data-value="2"] span[data-type="ok"]') 
            for (const sub of spanValue2TypeOK as any){
                sub.innerHTML = stone_2_ok+stone_2_wait
            }

            const cntValue2 : NodeListOf<Element> = document.querySelectorAll('.cnt[data-value="2"]') 
            for (const sub of cntValue2 as any){
                sub.innerHTML = stone_2_cnt
            }

            // 각인3
            let stone_3_ok = '';
            let stone_3_wait = '';
            for (let i=0; i<stone_3.length; i++){
                if(stone_3[i]==1){
                    stone_3_ok+="◆";
                }else if(stone_3[i]==0){
                    stone_3_ok+="◎";
                }
            }
            for (let i=0; i<10-stone_3.length; i++){
                stone_3_wait+="○";
            }
            const spanValue3TypeOK : NodeListOf<Element> = document.querySelectorAll('.div-stone[data-value="3"] span[data-type="ok"]') 
            for (const sub of spanValue3TypeOK as any){
                sub.innerHTML = stone_3_ok+stone_3_wait
            }

            const cntValue3 : NodeListOf<Element> = document.querySelectorAll('.cnt[data-value="3"]') 
            for (const sub of cntValue3 as any){
                sub.innerHTML = stone_3_cnt
            }


            const recoEl : NodeListOf<Element> = document.querySelectorAll('.reco') 
            for (const sub of recoEl as any){
                sub.innerHTML = ''
            }

            if(proba>=65){
                if(stone_1.length<10){
                    let recoValue1 = document.querySelector('.reco[data-value="1"]');
                    recoValue1.innerHTML = '추천';
                }else if(stone_2.length<10){
                    let recoValue2 = document.querySelector('.reco[data-value="2"]');
                    recoValue2.innerHTML = '추천';
                }
            }else if(proba>=55){
                if(stone_2.length<10){
                    let recoValue2 = document.querySelector('.reco[data-value="2"]');
                    recoValue2.innerHTML = '추천';
                }else if(stone_1.length<10){
                    let recoValue1 = document.querySelector('.reco[data-value="1"]');
                    recoValue1.innerHTML = '추천';
                }
            }else{
                if(stone_3.length<10){
                    let recoValue3 = document.querySelector('.reco[data-value="3"]');
                    recoValue3.innerHTML = '추천';
                    if(stone_2.length<10 && proba==45){
                        let recoValue2 = document.querySelector('.reco[data-value="2"]');
                        recoValue2.innerHTML = '역배 추천';
                    }else if(stone_1.length<10 && proba==45){
                        let recoValue1 = document.querySelector('.reco[data-value="1"]');
                        recoValue1.innerHTML = '역배 추천';
                    }
                }else if(stone_2.length<10){
                    let recoValue2 = document.querySelector('.reco[data-value="2"]');
                    recoValue2.innerHTML = '추천';
                }else if(stone_1.length<10){
                    let recoValue1 = document.querySelector('.reco[data-value="1"]');
                    recoValue1.innerHTML = '추천';
                }
            }

            let probaEl = document.querySelector('#proba');
            probaEl.innerHTML = proba+"";
        });
    }

    function getRandomIntInclusive(min : number, max : number) {
        let newMin = Math.ceil(min);
        let newMax = Math.floor(max);
        return Math.floor(Math.random() * (newMax - newMin + 1)) + newMin; //최댓값도 포함, 최솟값도 포함
    }


    async function btnProcClickEvent() {
        await new Promise<void>((resolve) => {
            let value : number = parseInt((this.getAttribute('data-value')?this.getAttribute('data-value'):0));
            console.log(value);
            
            let random_ = getRandomIntInclusive(1,100);
            if(random_<=proba){
                // 성공
                if(proba>25){
                    proba=proba-10;
                }
                switch(value){
                    case 1:
                        stone_1.push(1);
                        stone_1_cnt++;
                        break;
                    case 2:
                        stone_2.push(1);
                        stone_2_cnt++;
                        break;
                    case 3:
                        stone_3.push(1);
                        stone_3_cnt++;
                        break;
                    default:
                        break;
                }
            }else{
                if(proba<75){
                    proba=proba+10;
                }
                switch(value){
                    case 1:
                        stone_1.push(0);
                        break;
                    case 2:
                        stone_2.push(0);
                        break;
                    case 3:
                        stone_3.push(0);
                        break;
                    default:
                        break;
                }
            }
            drawScreen();
        })
    }

    
    function init(){
            proba = 75;
            stone_1 = [];
            stone_2 = [];
            stone_3 = [];
            stone_1_cnt = 0;
            stone_2_cnt = 0;
            stone_3_cnt = 0;
            drawScreen();
        
            const allBtnProc : NodeListOf<Element> = document.querySelectorAll('.btn-proc') 
            for (const sub of allBtnProc as any){
                sub.disabled = false;
            }
    }
    async function test() {
        await new Promise<void>((resolve) => {
            const allDivStoneSpan : NodeListOf<Element> = document.querySelectorAll('.div-stone span') 
            for (const sub of allDivStoneSpan as any){
                sub.innerHTML = "";
            }


            const allBtnProc : NodeListOf<Element> = document.querySelectorAll('.btn-proc') 
            for (const sub of allBtnProc as any){
                sub.addEventListener('click',btnProcClickEvent);
            }
            
            let btnClear = document.querySelector('#btnClear');
            btnClear.addEventListener('click',init);
            
            init();
            
        })

        console.log('Stone Page Done.');
    };

    useEffect(() => {
        test();
    }, []);

    return (<div id="index">
            <section className="page-section portfolio" id="picture">
                <div className="container">
                    <h5 className="text-center text-uppercase mb-0">어빌리티스톤 시뮬레이터</h5>
                    <br/>
                    <h6 className="font-1rem">망해도 책임안짐</h6>
                    <br/>
                    <div className="row mb-1" style={f08important}>
                        <div className="col">
                            <div className="row">
                                <div className="col-3">
                                    <button className="btn btn-sm btn-warning" id="btnClear" style={f06important}>초기화</button>
                                </div>
                                <div className="col-6">
                                    ○ : 대기, ◎ : 실패, ◆ : 성공
                                </div>
                                <div className="col-3">
                                    확률 : <span id="proba">75</span>%
                                </div>
                            </div>
                            <div className="row mb-1">
                                <div className="col-2" style={f07important}>
                                    각인 1
                                </div>
                                <div className="col-5 div-stone" data-value="1" style={color5853EB}>
                                    <span className="up-ok" data-type="ok">초기화 필요</span>
                                    <span className="wait" data-type="wait">초기화 필요</span>
                                </div>
                                <div className="col-2">
                                    <button className="btn btn-sm btn-info btn-proc" onMouseDown={btnProcClickEvent} data-value="1" style={btnProcStyle} disabled>선택</button>
                                </div>
                                <div className="col-1">
                                    +<span className="cnt" data-value="1"></span>
                                </div>
                                <div className="col-2">
                                    <span className="reco" data-value="1"></span>
                                </div>
                            </div>
                            <div className="row mb-1">
                                <div className="col-2" style={f07important}>
                                    각인 2
                                </div>
                                <div className="col-5 div-stone" data-value="2" style={color2BA5BA}>
                                    <span className="up-ok" data-type="ok">초기화 필요</span>
                                    <span className="wait" data-type="wait">초기화 필요</span>
                                </div>
                                <div className="col-2">
                                    <button className="btn btn-sm btn-success btn-proc" onMouseDown={btnProcClickEvent} data-value="2" style={btnProcStyle} disabled>선택</button>
                                </div>
                                <div className="col-1">
                                    +<span className="cnt" data-value="2"></span>
                                </div>
                                <div className="col-2">
                                    <span className="reco" data-value="2"></span>
                                </div>
                            </div>
                            <div className="row mb-1">
                                <div className="col-2" style={f07important}>
                                    감소
                                </div>
                                <div className="col-5 div-stone" data-value="3" style={colorBA2B2B}>
                                    <span className="down-ok" data-type="ok">초기화 필요</span>
                                    <span className="wait" data-type="wait">초기화 필요</span>
                                </div>
                                <div className="col-2">
                                    <button className="btn btn-sm btn-danger btn-proc" onMouseDown={btnProcClickEvent} data-value="3" style={btnProcStyle} disabled>선택</button>
                                </div>
                                <div className="col-1">
                                    +<span className="cnt" data-value="3"></span>
                                </div>
                                <div className="col-2">
                                    <span className="reco" data-value="3"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>);
};