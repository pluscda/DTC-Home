const _products = [
  { 
    title: 'Radiological Information System', sub: 'RIS-放射資訊系統', img: 'productMobile_image/ris.png', 
    contents: ['放射科資訊系統(RIS)的主要功能是整合醫療資訊系統(HIS)與醫療影像擷取與傳輸系統(PACS),透過RIS系統放射可在作業時醫療人員可直接至HIS系統取得患者資料,避免放射科醫護人員執行不必要的病人資料重複輸入作業,縮短放射科病人等待時間。','當患者完成放射檢查後,RIS所產生的診斷報告影像資料,同時可傳送到HS系統,門診醫生就能快速取得患者資訊進行診斷。','整合RIS、HIS與PACS等系統,採用國際標準HL7建置系統,一個良好的放射科資訊系統(RIS)應該要和醫院資訊系統(HIS)密切結合,並且能夠同時支援臨床服務、研究以及品管。在臨床醫療的運作上本系統提供了重要的助益。'], 
    steps: [{ title: '輕鬆快速製作報告', sub: '整合PACS系統與HIS系統提供<br />製作報告排程權限資料管理' },{ title: '強大的擴充功能', sub: '同時支援臨床服務、<br />研究以及品管' },{ title: '醫療成本降低', sub: '避免重複輸入病患資料,<br />縮短候診時間' },{ title: '完全整合現有<br />系統與設備', sub: '結合影像設備操作<br />建構完整作業流程' },{ title: '強大影像管理<br />動靜皆宜的影像擷取', sub: '擷取醫療影像資料<br />提升作業效率' },{ title: '符合國際醫療標準', sub: '採用國際標準HL7<br />建置系統' }] 
  },


  { title: 'Pictures Archiving Communication System', sub: 'PACS-影像醫學傳輸系統', img: 'productMobile_image/pacs.png', contents: [], steps: [] },

  { title: 'DC-100', sub: '醫療影像伺服器', img: 'productMobile_image/pacs.png', 
    contents: ['支援DICOM3.0所有標準儀器之連接,接收DICOM影像儲存。符合DICOM3.0標準,任何品牌之Printer、Viewer、Gateway都可連接・提供設定Server傳送與接收參數設定,連接各種儀器和產品。','提供超高效能的影像調閱索引技術,有效管理您的醫療影像與傳輸。','支援DICOM Routing功能,可設定Routing DICOM Tag 傳送修件。','支援DICOM影像刪除,以設定時間為刪除條件支援DICOM3.0規模之各項SOPo採用Multi-Thread架構,簡化前端介面並加強背景多工作業,記憶資料共用。','提供醫院使用者帳號管理、身份確認及安全控管。提供影像自動路由傳送之功能,可設定多組傳送路徑及接收端。提供安全性,正確性,穩定性,保證不同系統之標準影像交換機制可正常執行。'], 
    steps: [{ title: '資料儲存/備份', sub: '自動傳送影像到影像中心,可建<br />立多筆影像備份儲存管理設定。' }, { title: '容量管理', sub: '自動監測影像儲存空間容量,<br />確保有足夠空間可利用。' }, { title: '資料維護與還原', sub: '可支援影像新增、修改、刪除、合<br />併/分割及影像倒回(Redo)等功能。' }] 
  },
  { title: 'DC-200', sub: 'PACS-影像醫學傳輸系統1', img: 'productMobile_image/dc-200.png', contents: [], steps: [] },
  { title: 'DC-300', sub: 'PACS-影像醫學傳輸系統2', img: 'productMobile_image/dc-300.png', contents: [], steps: [] },
  { title: 'DC-500', sub: 'PACS-影像醫學傳輸系統', img: 'productMobile_image/dc-500.png', contents: [], steps: [] },
  { title: 'DC-600', sub: 'PACS-影像醫學傳輸系統', img: 'productMobile_image/dc-600.png', contents: [], steps: [] },
  { title: 'DC-700', sub: 'PACS-影像醫學傳輸系統', img: 'productMobile_image/dc-700.png', contents: [], steps: [] },
  { title: 'DC-810', sub: 'PACS-影像醫學傳輸系統', img: 'productMobile_image/dc-810.png', contents: [], steps: [] },
  { title: 'DC-830', sub: 'PACS-影像醫學傳輸系統', img: 'productMobile_image/dc-830.png', contents: [], steps: [] },
  { title: 'DC-1800', sub: 'PACS-影像醫學傳輸系統', img: 'productMobile_image/dc-1800.png', contents: [], steps: [] },
  { title: 'DICOM-DIR', sub: 'PACS-影像醫學傳輸系統', img: 'productMobile_image/dicom-dir.png', contents: [], steps: [] },


  { title: 'Hospital Information System', sub: 'HIS-醫院資訊系統', img: 'productMobile_image/his.png', contents: [], steps: [] },
  { title: 'Surgical Records Report System', sub: 'SRRS-手術記錄報告系統', img: 'productMobile_image/srrs.png', contents: [], steps: [] },
  { title: 'Electronic Medical Record', sub: 'EMR-電子病歷管理系統', img: 'productMobile_image/emr.png', contents: [], steps: [] },
  { title: 'Pathological Examination System', sub: 'PES-病理檢驗系統', img: 'productMobile_image/pes.png', contents: [], steps: [] },
  { title: 'Laboratory Information System', sub: 'LIS-檢驗資訊系統', img: 'productMobile_image/lis.png', contents: [], steps: [] },
  { title: 'Cancer Treatment Plan System', sub: 'CTPS-癌症管理系統', img: 'productMobile_image/ctps.png', contents: [], steps: [] },
  { title: 'Medical Record Image System', sub: 'MRIS-病歷掃描倉儲系統', img: 'productMobile_image/mris.png', contents: [], steps: [] },
  { title: 'Automatic Dialysis System', sub: 'ADS-血液淨化管理系統', img: 'productMobile_image/ads.png', contents: [], steps: [] }
];

export const products = _products.map(product => ({...product, key: product.title.split(' ')[0] }));

