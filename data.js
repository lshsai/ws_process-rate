const reportData = {
    // 2. 1단지 데이터
    complex1: {
        link: "https://m.prugio.com/construction/construction-view.aspx?Pkey=1085",
        details: `
1. 건축공사 
-105동(선행동) 17F 골조공사 진행 중 
-각 동 지상층 골조공사 진행 중(13F ~ 17F) -부대시설 지붕층 골조공사 진행 중 
-세대 내부 단열 및 방수공사 
-세대 PVC창호, 핸드레일 설치 
2. 설비공사 
-세대 오배수배관 및 환기덕트 시공 
            `
        
    },

    // 3. 2단지 데이터
    complex2: {
        link: "https://m.prugio.com/construction/construction-view.aspx?Pkey=1086",
        details: `
ㆍ 골조공사 : 주동 17~21F 타설완료, 근린생활시설 및 경비실 시공 
ㆍ 방수공사 : 주차장 및 부대시설 지붕층 복합방수 
ㆍ 조적공사 : 지하주차장 블록 및 ALC공사 
ㆍ 내장공사 : 세대 단열재, 경량틀, 합지판 시공 
ㆍ 마감공사 : 발코니난간대 및 창호시공
            `
        
    },

    // 4. 월별 공정률 누적 데이터 (매달 아래에 한 줄씩 추가)
    history: [
        { date: '2026-04-13', label: '04/13', prog1: 19.85, prog2: 23.48 },
        { date: '2026-05-06', label: '05/06', prog1: 23.35, prog2: 26.66 },
        { date: '2026-06-08', label: '06/08', prog1: 28.02, prog2: 32.02 },
        { date: '2026-07-06', label: '07/06', prog1: 31.32, prog2: 36.13 },
        { date: '2026-08-04', label: '08/04', prog1: 34.42, prog2: 40.10 },
        { date: '2026-09-04', label: '09/02', prog1: 37.9, prog2: 44.52 },
    ]
};