const reportData = {
    // 1. 공지 월
    month: "6월",

    // 2. 1단지 데이터
    complex1: {
        progress: 28.2,
        link: "https://m.prugio.com/construction/construction-view.aspx?Pkey=1085",
        details: [
            "창호시공 : 1F ~ 5F PVC 창호 시공",
            "지하주차장 : 블록 쌓기기",
            "골조공사 : 12F ~ 15F"
        ]
    },

    // 3. 2단지 데이터
    complex2: {
        progress: 32.02,
        link: "https://m.prugio.com/construction/construction-view.aspx?Pkey=1086",
        details: [
            "단열공사 및 석고보드 설치 : 1F ~ 9F",
            "창호시공-1 : 1F ~ 13F PL창호 설치",
            "창호시공-2 : 1F ~ 5F  목창호 및 방화문 시공",
            "골조공사 : 17F ~ 20F",
        ]
    },

    // 4. 월별 공정률 누적 데이터 (매달 아래에 한 줄씩 추가)
    history: [
        { date: '2026-04-13', label: '04/13', prog1: 19.85, prog2: 23.48 },
        { date: '2026-05-06', label: '05/06', prog1: 23.35, prog2: 26.66 },
        { date: '2026-06-08', label: '06/08', prog1: 28.02, prog2: 32.02 },
        { date: '2026-07-06', label: '07/06', prog1: 31.32, prog2: 36.13 },
        { date: '2026-08-04', label: '08/04', prog1: 34.42, prog2: 40.01 },
    ]
};