const reportData = {
    // 2. 1단지 데이터
    complex1: {
        link: "https://m.prugio.com/construction/construction-view.aspx?Pkey=1085",
        details: `
ㆍ 건축공사 -105동(선행동) 25F 골조공사 진행 중 -각 동 지상층 골조공사 진행 중(21F ~ 25F) -세대 내부 단열 및 방수공사 -세대 PVC창호, 목창호 가틀, 방화문틀 설치 -근린생활시설 골조공사 진행 중
ㆍ 설비공사 -세대 오배수배관 및 환기덕트 시공
            `
        
    },

    // 3. 2단지 데이터
    complex2: {
        link: "https://m.prugio.com/construction/construction-view.aspx?Pkey=1086",
        details: `
ㆍ 골조공사 : 주동 ~28F 타설완료, 근린생활시설 및 경비실/문주 골조 시공완료 ㆍ 조적공사 : 부대시설 블록공사 시공 ㆍ 내장공사 : 세대 단열재, 경량벽체, 합지판 시공 ㆍ 방수공사 : 세대 욕실, 발코니, 다용도실 방수 시공 ㆍ 습식공사 : 세대 저층부 방통타설 ㆍ 창호공사 : PL창호 및 AL그릴창호 시공, 방화문틀 및 목창호 가틀 시공 ㆍ 마감공사 : 세대 발코니난간대 시공
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
        { date: '2026-11-09', label: '11/09', prog1: 47.17, prog2: 52.38 },
    ]
};