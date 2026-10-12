const reportData = {
    // 2. 1단지 데이터
    complex1: {
        link: "https://m.prugio.com/construction/construction-view.aspx?Pkey=1085",
        details: `
17F ~ 23F 골조공사 진행중, 마감공사(PVC창호, 방화문, 목창호, 단열재, 경량벽체
            `
        
    },

    // 3. 2단지 데이터
    complex2: {
        link: "https://m.prugio.com/construction/construction-view.aspx?Pkey=1086",
        details: `
23F ~ 28F 골조공사 진행중, 마감공사(단열, 경량벽체, PL창호, 목창호 및 방화문 등
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
        { date: '2026-10-07', label: '10/07', prog1: 43.74, prog2: 48.64 },
    ]
};