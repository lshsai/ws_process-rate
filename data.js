const reportData = {
    // 2. 1단지 데이터
    complex1: {
        link: "https://m.prugio.com/construction/construction-view.aspx?Pkey=1085",
        details: `
-105동(선행동) 14F 골조공사 진행 중
-각 동 지상층 골조공사 진행 중(10F ~ 14F)
-부대시설 지붕층 골조공사 진행 중
-101,102동 빌딩호이스트 설치
-세대 PVC창호, 핸드레일 설치
            `
        
    },

    // 3. 2단지 데이터
    complex2: {
        link: "https://m.prugio.com/construction/construction-view.aspx?Pkey=1086",
        details: `
ㆍ 골조공사 : 주동~18F 타설완료,부속동 골조 시공완료
ㆍ 방수공사 : 주차장 및 부대시설 지붕층 복합방수
ㆍ 조적공사 : 지하주차장 블록공사
ㆍ 내장공사 : 세대 단열재, 경량틀, 합지판 시공
ㆍ 마감공사 : 발코니난간대 설치, 주동 창틀 시공
            `
        
    },

    // 4. 월별 공정률 누적 데이터 (매달 아래에 한 줄씩 추가)
    history: [
        { date: '2026-04-13', label: '04/13', prog1: 19.85, prog2: 23.48 },
        { date: '2026-05-06', label: '05/06', prog1: 23.35, prog2: 26.66 },
        { date: '2026-06-08', label: '06/08', prog1: 28.02, prog2: 32.02 },
        { date: '2026-07-06', label: '07/06', prog1: 31.32, prog2: 36.13 },
        { date: '2026-08-04', label: '08/04', prog1: 34.42, prog2: 40.10 },
    ]
};