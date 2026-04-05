// tổ hợp 
const tohop = {
    'a00': ['toan', 'ly', 'hoa'],
    'a01': ['toan', 'ly', 'anh'],
    'b00': ['toan', 'hoa', 'sinh'],
    'b01': ['toan', 'hoa', 'anh'],
    'c00': ['toan', 'su', 'dia'],
    'c01': ['toan', 'su', 'anh'],
    'd01': ['toan', 'van', 'anh']
};

// tổ hợp theo sở thích :)
const careerData = {
    a00: { // Toán  Lý  Hóa
        'cong-nghe': [
            { name: 'Kỹ Sư Phần Mềm', desc: 'Phát triển phần mềm, ứng dụng web và mobile' },
            { name: 'Nhà Khoa Học Dữ Liệu', desc: 'Phân tích dữ liệu lớn, machine learning' },
            { name: 'Kỹ Sư AI/Machine Learning', desc: 'Phát triển trí tuệ nhân tạo' },
            { name: 'Kỹ Sư Điện Tử', desc: 'Thiết kế mạch điện tử, thiết bị' }
        ],
        'ky-thuat': [
            { name: 'Kỹ Sư Cơ Khí', desc: 'Thiết kế và sản xuất máy móc, thiết bị' },
            { name: 'Kỹ Sư Điện', desc: 'Thiết kế hệ thống điện, năng lượng' },
            { name: 'Kỹ Sư Xây Dựng', desc: 'Thiết kế và quản lý công trình xây dựng' },
            { name: 'Kỹ Sư Hóa Học', desc: 'Thiết kế quy trình sản xuất hóa chất' }
        ],
        'kinh-doanh': [
            { name: 'Nhà Phân Tích Tài Chính', desc: 'Phân tích thị trường, đầu tư' },
            { name: 'Chuyên Gia Kinh Tế', desc: 'Nghiên cứu kinh tế, chính sách' }
        ]
    },
    a01: { // Toán  Lý  Anh
        'cong-nghe': [
            { name: 'Kỹ Sư Phần Mềm', desc: 'Phát triển phần mềm, ứng dụng web' },
            { name: 'Kỹ Sư Viễn Thông', desc: 'Phát triển hệ thống viễn thông' },
            { name: 'Kỹ Sư Điều Khiển', desc: 'Thiết kế hệ thống tự động hóa' }
        ],
        'ky-thuat': [
            { name: 'Kỹ Sư Hàng Không', desc: 'Thiết kế máy bay, tàu vũ trụ' },
            { name: 'Kỹ Sư Năng Lượng', desc: 'Khai thác năng lượng tái tạo' }
        ],
        'ngon-ngu': [
            { name: 'Phiên Dịch Viên Kỹ Thuật', desc: 'Dịch tài liệu công nghệ' },
            { name: 'Chuyên Gia Giao Dịch Quốc Tế', desc: 'Làm việc ở các công ty quốc tế' }
        ]
    },
    b00: { // Toán  Hóa  Sinh
        'y-te': [
            { name: 'Bác Sĩ', desc: 'Chẩn đoán và điều trị bệnh' },
            { name: 'Dược Sĩ', desc: 'Chuẩn bị và phân phát thuốc' },
            { name: 'Y Tá', desc: 'Chăm sóc bệnh nhân' }
        ],
        'ky-thuat': [
            { name: 'Kỹ Sư Môi Trường', desc: 'Bảo vệ và cải thiện môi trường' },
            { name: 'Chuyên Gia Xử Lý Nước', desc: 'Xử lý nước thải, nước sạch' }
        ],
        'cong-nghe': [
            { name: 'Kỹ Sư Sinh Học', desc: 'Ứng dụng sinh học vào công nghệ' },
            { name: 'Chuyên Gia Sinh Học Tính Toán', desc: 'Phân tích dữ liệu sinh học' }
        ]
    },
    b01: { // Toán  Hóa  Anh
        'y-te': [
            { name: 'Bác Sĩ Đa Khoa', desc: 'Chẩn đoán và điều trị bệnh' },
            { name: 'Dược Sĩ', desc: 'Chuẩn bị và phân phát thuốc' }
        ],
        'ky-thuat': [
            { name: 'Kỹ Sư Hóa Học', desc: 'Thiết kế quy trình sản xuất hóa chất' },
            { name: 'Kỹ Sư Môi Trường', desc: 'Bảo vệ môi trường' }
        ],
        'ngon-ngu': [
            { name: 'Phiên Dịch Viên Y Tế', desc: 'Hỗ trợ bệnh nhân nước ngoài' }
        ]
    },
    c00: { // Toán  Sử  Địa
        'kinh-doanh': [
            { name: 'Chuyên Gia Du Lịch', desc: 'Phát triển du lịch, dự lịch' },
            { name: 'Nhà Ngoại Giao', desc: 'Đại diện nước ngoài' },
            { name: 'Chuyên Gia Quan Hệ Quốc Tế', desc: 'Nghiên cứu quan hệ quốc tế' }
        ],
        'toa-dam': [
            { name: 'Luật Sư', desc: 'Bảo vệ quyền lợi pháp lý' }
        ],
        'ky-thuat': [
            { name: 'Nhà Địa Chất', desc: 'Khám phá và khai thác mỏ' },
            { name: 'Chuyên Gia Khai Thác Tài Nguyên', desc: 'Khai thác tài nguyên bền vững' }
        ]
    },
    c01: { // Toán  Sử  Anh
        'kinh-doanh': [
            { name: 'Chuyên Gia Du Lịch', desc: 'Phát triển du lịch quốc tế' },
            { name: 'Nhân Viên Quan Hệ Công Chúng', desc: 'Quản lý quan hệ công chúng' },
            { name: 'Nhà Ngoại Giao', desc: 'Đại diện nước ngoài' }
        ],
        'ngon-ngu': [
            { name: 'Phiên Dịch Viên', desc: 'Phiên dịch giữa các ngôn ngữ' },
            { name: 'Biên Dịch Viên', desc: 'Dịch các tài liệu chuyên ngành' }
        ],
        'toa-dam': [
            { name: 'Luật Sư Quốc Tế', desc: 'Bảo vệ quyền lợi pháp lý quốc tế' }
        ]
    },
    d01: { // Toán  Văn  Anh
        'ngon-ngu': [
            { name: 'Phiên Dịch Viên', desc: 'Phiên dịch giữa các ngôn ngữ' },
            { name: 'Biên Dịch Viên', desc: 'Dịch các tài liệu chuyên ngành' },
            { name: 'Giáo Viên Ngoại Ngữ', desc: 'Dạy ngoại ngữ' }
        ],
        'kinh-doanh': [
            { name: 'Chuyên Viên Quản Lý Nhân Sự', desc: 'Quản lý nhân sự công ty' },
            { name: 'Nhân Viên Quan Hệ Công Chúng', desc: 'Quản lý quan hệ công chúng' }
        ],
        'thiet-ke': [
            { name: 'Biên Kịch', desc: 'Viết kịch bản cho phim' },
            { name: 'Nhà Soạn Kịch', desc: 'Sáng tác các tác phẩm kịch' }
        ]
    }
};

// csdl ;-;
const universityDatabase = `ĐH Bách Khoa ĐHQG-HCM,Khoa học Máy tính,"A00, A01",28.65,"CT Tổng hợp (75% ĐGNL + 20% THPT + 5% HB) quy đổi thang 100"
ĐH Bách Khoa ĐHQG-HCM,Kỹ thuật Ô tô,"A00, A01",73.50,"CT Tổng hợp (Thang 100)"
ĐH Bách Khoa ĐHQG-HCM,Logistics & QL Chuỗi cung ứng,"A00, A01",76.80,"CT Tổng hợp (Thang 100)"
ĐH Bách Khoa ĐHQG-HCM,Kỹ thuật Hóa học,"A00, B00, D07",70.20,"CT Tổng hợp (Thang 100)"
ĐH Bách Khoa ĐHQG-HCM,Kỹ thuật Xây dựng,"A00, A01",61.50,"CT Tổng hợp (Thang 100)"
ĐH CNTT ĐHQG-HCM (UIT),Trí tuệ nhân tạo (AI),"A00, A01, D01",27.80,"Thang 30"
ĐH CNTT ĐHQG-HCM (UIT),Kỹ thuật phần mềm,"A00, A01, D01",27.20,"Thang 30"
ĐH CNTT ĐHQG-HCM (UIT),An toàn thông tin,"A00, A01, D01",26.90,"Thang 30"
ĐH CNTT ĐHQG-HCM (UIT),Hệ thống thông tin,"A00, A01, D01",26.50,"Thang 30"
ĐH CNTT ĐHQG-HCM (UIT),Thương mại điện tử,"A00, A01, D01",26.65,"Thang 30"
ĐH KHTN ĐHQG-HCM (US),Khoa học máy tính,"A00, A01, B08, D07",28.50,"Thang 30"
ĐH KHTN ĐHQG-HCM (US),Công nghệ sinh học,"B00, A00, D07, B08",25.30,"Thang 30"
ĐH KHTN ĐHQG-HCM (US),Hóa học,"A00, B00, D07, A02",24.10,"Thang 30"
ĐH KHTN ĐHQG-HCM (US),Khoa học dữ liệu,"A00, A01, B08, D07",26.80,"Thang 30"
ĐH KHTN ĐHQG-HCM (US),Công nghệ kỹ thuật môi trường,"A00, B00, D07, A02",19.50,"Thang 30"
ĐH KHXH&NV ĐHQG-HCM,Báo chí,"C00, D01, D14",28.33,"Thang 30 (C00 thường cao nhất)"
ĐH KHXH&NV ĐHQG-HCM,Tâm lý học,"C00, D01, B00",27.60,"Thang 30"
ĐH KHXH&NV ĐHQG-HCM,Quan hệ quốc tế,"D01, D14",27.20,"Thang 30 (Ưu tiên tiếng Anh)"
ĐH KHXH&NV ĐHQG-HCM,Ngôn ngữ Anh,"D01",26.85,"Thang 30 (Tiếng Anh nhân hệ số 2 tùy phương thức)"
ĐH KHXH&NV ĐHQG-HCM,Du lịch,"C00, D01, D14",27.00,"Thang 30"
ĐH Kinh tế - Luật (UEL),Thương mại điện tử,"A00, A01, D01",27.10,"Thang 30"
ĐH Kinh tế - Luật (UEL),Luật kinh tế,"A00, A01, D01",26.50,"Thang 30"
ĐH Kinh tế - Luật (UEL),Marketing,"A00, A01, D01",27.50,"Thang 30"
ĐH Kinh tế - Luật (UEL),Kinh doanh quốc tế,"A00, A01, D01",27.25,"Thang 30"
ĐH Kinh tế - Luật (UEL),Tài chính - Ngân hàng,"A00, A01, D01",26.20,"Thang 30"
ĐH Kinh tế TP.HCM (UEH),Kinh doanh quốc tế,"A00, A01, D01, D07",27.20,"Thang 30"
ĐH Kinh tế TP.HCM (UEH),Marketing,"A00, A01, D01, D07",27.00,"Thang 30"
ĐH Kinh tế TP.HCM (UEH),Logistic & Chuỗi cung ứng,"A00, A01, D01, D07",27.10,"Thang 30"
ĐH Kinh tế TP.HCM (UEH),Tài chính,"A00, A01, D01, D07",26.20,"Thang 30"
ĐH Kinh tế TP.HCM (UEH),Kế toán doanh nghiệp,"A00, A01, D01, D07",26.00,"Thang 30"
ĐH Kinh tế TP.HCM (UEH),Luật kinh tế,"A00, A01, D01, D07",26.30,"Thang 30"
ĐH Kinh tế TP.HCM (UEH),Công nghệ Marketing (MarTech),"A00, A01, D01, D07",26.80,"Thang 30"
ĐH Sư phạm Kỹ thuật TP.HCM (HCMUTE),Sư phạm Tiếng Anh,"D01",27.80,"Thang 30 (Môn Anh không nhân hệ số ở phương thức này)"
ĐH Sư phạm Kỹ thuật TP.HCM (HCMUTE),CNKT Ô tô,"A00, A01, D01, D90",26.75,"Thang 30"
ĐH Sư phạm Kỹ thuật TP.HCM (HCMUTE),CNKT Cơ khí,"A00, A01, D01, D90",25.50,"Thang 30"
ĐH Sư phạm Kỹ thuật TP.HCM (HCMUTE),CNKT Điều khiển & Tự động hóa,"A00, A01, D01, D90",26.50,"Thang 30"
ĐH Sư phạm Kỹ thuật TP.HCM (HCMUTE),Logistics & Chuỗi cung ứng,"A00, A01, D01, D90",26.25,"Thang 30"
ĐH Sư phạm Kỹ thuật TP.HCM (HCMUTE),CNTT (Hệ Chất lượng cao Tiếng Việt),"A00, A01, D01, D90",26.10,"Thang 30"
ĐH Y Dược TP.HCM (UMP),Y khoa,"B00",28.20,"Thang 30"
ĐH Y Dược TP.HCM (UMP),Răng - Hàm - Mặt,"B00",27.90,"Thang 30"
ĐH Y Dược TP.HCM (UMP),Dược học,"A00, B00",25.50,"Thang 30"
ĐH Y Dược TP.HCM (UMP),Điều dưỡng,"B00",23.40,"Thang 30"
ĐH Y Dược TP.HCM (UMP),Kỹ thuật xét nghiệm y học,"B00",25.10,"Thang 30"
ĐH Y khoa Phạm Ngọc Thạch,Y đa khoa (TP.HCM),"B00",26.55,"Thang 30 (Có mã riêng cho thí sinh hộ khẩu TP.HCM)"
ĐH Y khoa Phạm Ngọc Thạch,Y đa khoa (Toàn quốc),"B00",26.80,"Thang 30"
ĐH Y khoa Phạm Ngọc Thạch,Răng Hàm Mặt,"B00",26.60,"Thang 30"
ĐH Sư phạm TP.HCM (HCMUE),Sư phạm Toán học,"A00",27.50,"Thang 30"
ĐH Sư phạm TP.HCM (HCMUE),Sư phạm Ngữ văn,"C00",28.25,"Thang 30"
ĐH Sư phạm TP.HCM (HCMUE),Sư phạm Tiếng Anh,"D01",36.50,"Thang 40 (Môn Anh nhân 2)"
ĐH Sư phạm TP.HCM (HCMUE),Ngôn ngữ Anh,"D01",26.20,"Thang 30"
ĐH Sư phạm TP.HCM (HCMUE),Tâm lý học,"B00, C00, D01",26.80,"Thang 30"
ĐH Luật TP.HCM (ULAW),Luật,"A00, A01, C00, D01",27.11,"Thang 30 (Khối C00 thường cao nhất)"
ĐH Luật TP.HCM (ULAW),Luật Thương mại quốc tế,"A00, A01, D01, D84",27.50,"Thang 30 (Ưu tiên Tiếng Anh)"
ĐH Luật TP.HCM (ULAW),Quản trị - Luật,"A00, A01, D01, D84",26.80,"Thang 30"
ĐH Nông Lâm TP.HCM,Thú y,"A00, B00",24.50,"Thang 30 (Ngành hot nhất trường)"
ĐH Nông Lâm TP.HCM,Công nghệ thực phẩm,"A00, B00, D01",23.00,"Thang 30"
ĐH Nông Lâm TP.HCM,Nông học,"A00, B00, A01",19.00,"Thang 30"
ĐH Tài chính - Marketing (UFM),Marketing,"A00, A01, D01, D96",26.80,"Thang 30"
ĐH Tài chính - Marketing (UFM),Kinh doanh quốc tế,"A00, A01, D01, D96",26.50,"Thang 30"
ĐH Tài chính - Marketing (UFM),Quản trị khách sạn,"A00, A01, D01, D96",24.50,"Thang 30"
ĐH Mở TP.HCM (OU),Luật kinh tế,"A00, A01, D01, C00",24.50,"Thang 30"
ĐH Mở TP.HCM (OU),Marketing,"A00, A01, D01",25.20,"Thang 30"
ĐH Mở TP.HCM (OU),Ngôn ngữ Anh,"D01",24.80,"Thang 30 (Môn Anh hệ số 1)"
ĐH Tôn Đức Thắng (TDTU),Luật,"A00, A01, D01, C00",35.00,"Thang 40 (Có môn nhân hệ số 2 tùy tổ hợp)"
ĐH Tôn Đức Thắng (TDTU),Marketing,"A00, A01, D01, C00",36.20,"Thang 40 (Tiếng Anh thường nhân 2)"
ĐH Tôn Đức Thắng (TDTU),Kỹ thuật phần mềm,"A00, A01",34.50,"Thang 40 (Toán nhân 2)"
ĐH Tôn Đức Thắng (TDTU),Thiết kế đồ họa,"H00, H01",31.00,"Thang 40 (Môn Vẽ nhân 2)"
ĐH Quốc tế ĐHQG-HCM (IU),Quản trị kinh doanh,"A00, A01, D01",24.50,"Thang 30 (Giảng dạy 100% Tiếng Anh)"
ĐH Quốc tế ĐHQG-HCM (IU),Logistics,"A00, A01, D01",25.00,"Thang 30"
ĐH Quốc tế ĐHQG-HCM (IU),Ngôn ngữ Anh,"D01",25.50,"Thang 30"
ĐH Sài Gòn (SGU),Sư phạm Toán,"A00, A01",27.10,"Thang 30"
ĐH Sài Gòn (SGU),Ngôn ngữ Anh (Thương mại - Du lịch),"D01",25.80,"Thang 30"
ĐH Sài Gòn (SGU),Công nghệ thông tin,"A00, A01",25.50,"Thang 30"
ĐH Sài Gòn (SGU),Quản trị kinh doanh,"A00, A01, D01",24.80,"Thang 30"
Học viện Hàng không VN,Quản trị kinh doanh,"A00, A01, D01",24.20,"Thang 30"
Học viện Hàng không VN,Kỹ thuật hàng không,"A00, A01",25.00,"Thang 30"
Học viện Hàng không VN,Quản lý hoạt động bay,"A00, A01, D01",26.50,"Thang 30"
ĐH Cần Thơ (CTU),Giáo dục Tiểu học,"C00, D01",26.85,"Thang 30"
ĐH Cần Thơ (CTU),Kinh doanh quốc tế,"A00, A01, D01",26.00,"Thang 30"
ĐH Cần Thơ (CTU),Công nghệ thông tin,"A00, A01",25.75,"Thang 30"
ĐH Cần Thơ (CTU),Luật,"A00, A01, C00, D01",25.50,"Thang 30"
ĐH Cần Thơ (CTU),Nông học,"B00, A00",16.50,"Thang 30"
ĐH Công nghiệp TP.HCM (IUH),Công nghệ thông tin,"A00, A01, D01",24.50,"Thang 30"
ĐH Công nghiệp TP.HCM (IUH),Kỹ thuật Ô tô,"A00, A01, D01",24.00,"Thang 30"
ĐH Công nghiệp TP.HCM (IUH),Quản trị kinh doanh,"A00, A01, D01",23.50,"Thang 30"
ĐH Công nghiệp Thực phẩm (HUFI/HUIT),Công nghệ thực phẩm,"A00, A01, B00, D07",22.50,"Thang 30"
ĐH Văn Lang (VLU),Thiết kế đồ họa,"H00, V00, H01",24.00,"Thang 30 (Có xét tuyển môn năng khiếu riêng)"
ĐH Văn Lang (VLU),Quan hệ công chúng,"A00, C00, D01",22.00,"Thang 30"
ĐH Văn Lang (VLU),Marketing,"A00, A01, D01",21.00,"Thang 30"
ĐH HUTECH,Công nghệ thông tin,"A00, A01, D01",20.00,"Thang 30"
ĐH HUTECH,Truyền thông đa phương tiện,"A00, A01, C00, D01",20.00,"Thang 30"
ĐH HUTECH,Thú y,"A00, B00, D01",19.00,"Thang 30"
ĐH Hoa Sen (HSU),Thiết kế đồ họa,"A01, D01, D09, H00",18.00,"Thang 30"
ĐH Hoa Sen (HSU),Marketing,"A00, A01, D01, D09",17.00,"Thang 30"
ĐH Ngoại ngữ - Tin học (HUFLIT),Ngôn ngữ Anh,"D01",24.00,"Thang 30 (Tiếng Anh hệ số 1)"
ĐH Ngoại ngữ - Tin học (HUFLIT),Quan hệ quốc tế,"A01, D01",23.00,"Thang 30"
ĐH Kiến trúc TP.HCM (UAH),Kiến trúc,"V00",25.50,"Thang 40 (Môn Vẽ nhân 2)"
ĐH Kiến trúc TP.HCM (UAH),Thiết kế nội thất,"V00, H01",24.80,"Thang 40 (Môn Vẽ nhân 2)"
ĐH Kiến trúc TP.HCM (UAH),Kỹ thuật xây dựng,"A00, A01",22.50,"Thang 30"
ĐH Giao thông Vận tải TP.HCM (UTH),Logistics,"A00, A01, D01",26.00,"Thang 30"
ĐH Giao thông Vận tải TP.HCM (UTH),CNTT,"A00, A01, D01",25.50,"Thang 30"
ĐH Giao thông Vận tải TP.HCM (UTH),Khai thác vận tải,"A00, A01, D01",24.00,"Thang 30"
ĐH Ngân hàng TP.HCM (BUH),Tài chính Ngân hàng,"A00, A01, D01",25.50,"Thang 30"
ĐH Ngân hàng TP.HCM (BUH),Quản trị kinh doanh,"A00, A01, D01",25.80,"Thang 30"
ĐH Ngân hàng TP.HCM (BUH),Hệ thống thông tin quản lý,"A00, A01, D01",25.20,"Thang 30"`;

function parseUniversityData() {
    const data = {};
    const lines = universityDatabase.trim().split('\n');
    
    lines.forEach((line, index) => {
        if (!line.trim()) return;
        
        try {
            const parts = [];
            let current = '';
            let inQuotes = false;
            
            for (let i = 0; i < line.length; i++) {
                const char = line[i];
                
                if (char === '"') {
                    inQuotes = !inQuotes;
                } else if (char === ',' && !inQuotes) {
                    parts.push(current.trim());
                    current = '';
                } else {
                    current += char;
                }
            }
            parts.push(current.trim());
            
            if (parts.length < 5) return;
            
            const school = parts[0];
            const major = parts[1];
            let blocksStr = parts[2].replace(/"/g, ''); 
            const score = parseFloat(parts[3]);
            let notes = parts[4].replace(/"/g, ''); 
            
            if (!school || !major || !blocksStr || !score) return;
            
            const blocks = blocksStr.split(',').map(b => b.trim().toLowerCase());
            
            // Xác định thang điểm từ notes 
            let scale = 30; // Mặc định thang 30
            const notesLower = notes.toLowerCase();
            if (notesLower.includes('thang 100') || notesLower.includes('thang100')) {
                scale = 100;
            } else if (notesLower.includes('thang 40') || notesLower.includes('thang40')) {
                scale = 40;
            } else if (notesLower.includes('thang 30') || notesLower.includes('thang30')) {
                scale = 30;
            }
            
            blocks.forEach(block => {
                if (block && block.length > 0) {
                    if (!data[block]) {
                        data[block] = {};
                    }
                    if (!data[block][scale]) {
                        data[block][scale] = [];
                    }
                    data[block][scale].push({
                        name: school,
                        major: major,
                        score: score,
                        scale: scale,
                        notes: notes
                    });
                }
            });
        } catch(e) {
            console.error('Parse error at line ' + index + ':', e, line);
        }
    });
    
    //sort
    for (let block in data) {
        for (let scale in data[block]) {
            data[block][scale].sort((a, b) => b.score - a.score);
        }
    }
    
    console.log('=== PARSED DATA SUMMARY ===');
    for (let block in data) {
        const scales = Object.keys(data[block]).map(Number).sort((a,b) => a-b);
        console.log(`Block ${block}: Scales ${scales.join(', ')} - Total entries: ${Object.values(data[block]).flat().length}`);
        scales.forEach(scale => {
            console.log(`  Scale ${scale}: ${data[block][scale].length} entries`);
        });
    }
    console.log('Parsed university data:', data);
    return data;
}

const universityData = parseUniversityData();

const subjectNames = {
    a00: 'A00 (Toán + Lý + Hóa)',
    a01: 'A01 (Toán + Lý + Anh)',
    b00: 'B00 (Toán + Hóa + Sinh)',
    b01: 'B01 (Toán + Hóa + Anh)',
    c00: 'C00 (Toán + Sử + Địa)',
    c01: 'C01 (Toán + Sử + Anh)',
    d01: 'D01 (Toán + Văn + Anh)'
};

const subjectNameVietnamese = {
    toan: 'Toán',
    ly: 'Lý',
    hoa: 'Hóa',
    sinh: 'Sinh',
    van: 'Văn',
    su: 'Sử',
    dia: 'Địa',
    anh: 'Anh'
};

// Thêm event lisnenter khi chọn môn
document.addEventListener('DOMContentLoaded', function() {
    const subjectInputs = document.querySelectorAll('input[name="subject-choice"]');
    subjectInputs.forEach(input => {
        input.addEventListener('change', handleSubjectSelection);
    });
});

// chỉ cho chọn 1 khối
function handleBlockSelection(event) {
    if (event.target.checked) {
        document.querySelectorAll('input[name="block-choice"]').forEach(input => {
            if (input !== event.target) {
                input.checked = false;
            }
        });
    }

    // hiệu ứng
    document.querySelectorAll('input[name="block-choice"]').forEach(input => {
        const label = input.closest('label');
        if (input.checked) {
            label.classList.add('selected');
        } else {
            label.classList.remove('selected');
        }
    });

    // Update selected subjects display
    updateSelectedSubjectsDisplay();
}

// Update selected subjects display in the green box
function updateSelectedSubjectsDisplay() {
    const container = document.getElementById('selected-subjects');
    const selectedBlocks = Array.from(document.querySelectorAll('input[name="block-choice"]:checked'))
        .map(input => input.value);

    if (selectedBlocks.length === 0) {
        container.innerText = 'Chưa chọn khối';
        container.classList.add('empty');
    } else {
        const blockCode = selectedBlocks[0];
        const subjects = tohop[blockCode] || [];
        const subjectNames = subjects.map(s => subjectNameVietnamese[s]).join(' - ');
        container.innerText = `${blockCode.toUpperCase()}: ${subjectNames}`;
        container.classList.remove('empty');
    }
}

// Old searchByBlock function removed - using modified version below

function handleSubjectSelection(event) {
    // Lấy các môn được chọn
    const selectedSubjects = Array.from(document.querySelectorAll('input[name="subject-choice"]:checked'));

    // chọn hơn 3 môn bỏ môn đầu
    if (selectedSubjects.length > 3) {
        selectedSubjects[0].checked = false;
    }

    // hiệu ứng x3,14
    document.querySelectorAll('input[name="subject-choice"]').forEach(input => {
        const label = input.closest('label');
        if (input.checked) {
            label.classList.add('selected');
        } else {
            label.classList.remove('selected');
        }
    });

    // lấy ds môn hiện tại
    const currentSelected = Array.from(document.querySelectorAll('input[name="subject-choice"]:checked'))
        .map(input => input.value);

    // Nếu bạn muốn hiển thị cụm môn riêng, hãy sử dụng một vùng hiển thị khác.
    console.log('Selected subject-choice values:', currentSelected);
}

function findMatchingBlocks(selectedSubjects) {
    console.log('findMatchingBlocks input:', selectedSubjects);
    const matching = [];
    const selected = new Set(selectedSubjects);

    for (const [blockCode, subjects] of Object.entries(tohop)) {
        if (subjects.every(subject => selected.has(subject))) {
            matching.push(blockCode);
            console.log('Block', blockCode, 'matched');
        }
    }

    console.log('findMatchingBlocks output:', matching);
    return matching;
}

function displayMatchingBlocks(blocks, selectedSubjects) {
    const container = document.getElementById('matching-blocks');
    
    if (blocks.length === 0) {
        container.innerHTML = '<div style="grid-column: 1/-1; text-align: center; color: #999; padding: 20px;">Tổ hợp này không tương ứng với khối nào</div>';
        document.getElementById('results').style.display = 'none';
        return;
    }

    container.innerHTML = blocks.map(blockCode => `
        <div class="block-card" data-block="${blockCode}" onclick="selectBlock('${blockCode}')">
            <div class="block-name">${blockCode.toUpperCase()}</div>
            <div class="block-subjects">${tohop[blockCode].map(s => subjectNameVietnamese[s]).join(' + ')}</div>
        </div>
    `).join('');

    if (blocks.length === 1) {
        selectBlock(blocks[0]);
    }

    document.getElementById('results').style.display = 'block';
}

function selectBlock(blockCode) {
    console.log('selectBlock called with:', blockCode);
    console.log('universityData:', universityData);
    
    document.querySelectorAll('.block-card').forEach(card => {
        card.classList.remove('selected');
    });

    const blockCard = document.querySelector(`.block-card[data-block="${blockCode}"]`);
    if (blockCard) {
        blockCard.classList.add('selected');
    }

    const selectedInterests = Array.from(document.querySelectorAll('input[name="interest"]:checked'))
        .map(input => input.value);
    console.log('Selected interests:', selectedInterests);

    let careers = [];
    const blockCareers = careerData[blockCode];
    
    if (selectedInterests.length > 0 && blockCareers) {
        selectedInterests.forEach(interest => {
            if (blockCareers[interest]) {
                careers = careers.concat(blockCareers[interest]);
            }
        });
    } else if (blockCareers) {
        careers = getDefaultCareers(blockCode);
    }
    console.log('Careers found:', careers);

    const universities = universityData[blockCode] || {};
    console.log('Universities for', blockCode, ':', universities);

    // xuat
    displayResults(blockCode, careers, universities);
}

function getRecommendation() {
    const selectedSubjects = Array.from(document.querySelectorAll('input[name="subject-choice"]:checked'))
        .map(input => input.value);

    console.log('Selected subjects:', selectedSubjects);

    // báo lỗi 
    if (selectedSubjects.length !== 3) {
        showError('Vui lòng chọn đúng 3 môn học');
        return;
    }

    // search
    const matchingBlocks = findMatchingBlocks(selectedSubjects);
    console.log('Matching blocks:', matchingBlocks);
    
    if (matchingBlocks.length === 0) {
        showError('Tổ hợp này không tương ứng với khối nào');
        return;
    }

    // xuất
    displayMatchingBlocks(matchingBlocks, selectedSubjects);
    
    // auto chọn khối đầu 
    selectBlock(matchingBlocks[0]);
}

function getDefaultCareers(subject) {
    const defaults = {
        a00: [
            { name: 'Kỹ Sư Phần Mềm', desc: 'Phát triển ứng dụng và hệ thống phần mềm' },
            { name: 'Kỹ Sư Cơ Khí', desc: 'Thiết kế máy móc và thiết bị' },
            { name: 'Kỹ Sư Hóa Học', desc: 'Thiết kế quy trình sản xuất hóa chất' }
        ],
        a01: [
            { name: 'Kỹ Sư Phần Mềm', desc: 'Phát triển ứng dụng và hệ thống phần mềm' },
            { name: 'Kỹ Sư Viễn Thông', desc: 'Phát triển hệ thống viễn thông' },
            { name: 'Phiên Dịch Viên Kỹ Thuật', desc: 'Dịch tài liệu công nghệ' }
        ],
        b00: [
            { name: 'Bác Sĩ', desc: 'Chẩn đoán và điều trị bệnh' },
            { name: 'Dược Sĩ', desc: 'Chuẩn bị và phân phát thuốc' },
            { name: 'Kỹ Sư Môi Trường', desc: 'Bảo vệ và cải thiện môi trường' }
        ],
        b01: [
            { name: 'Bác Sĩ', desc: 'Chẩn đoán và điều trị bệnh' },
            { name: 'Dược Sĩ', desc: 'Chuẩn bị và phân phát thuốc' },
            { name: 'Kỹ Sư Hóa Học', desc: 'Thiết kế quy trình sản xuất hóa chất' }
        ],
        c00: [
            { name: 'Chuyên Gia Du Lịch', desc: 'Phát triển du lịch và dịch vụ' },
            { name: 'Nhà Ngoại Giao', desc: 'Đại diện nước ngoài' },
            { name: 'Luật Sư', desc: 'Bảo vệ quyền lợi pháp lý' }
        ],
        c01: [
            { name: 'Phiên Dịch Viên', desc: 'Phiên dịch giữa các ngôn ngữ' },
            { name: 'Chuyên Gia Du Lịch', desc: 'Phát triển du lịch quốc tế' },
            { name: 'Luật Sư Quốc Tế', desc: 'Bảo vệ quyền lợi pháp lý quốc tế' }
        ],
        d01: [
            { name: 'Phiên Dịch Viên', desc: 'Phiên dịch giữa các ngôn ngữ' },
            { name: 'Biên Dịch Viên', desc: 'Dịch các tài liệu chuyên ngành' },
            { name: 'Nhân Viên Quan Hệ Công Chúng', desc: 'Quản lý quan hệ công chúng' }
        ]
    };
    return defaults[subject] || [];
}

function showError(message) {
    // Ẩn kết quả nếu có lỗi
    const resultsSection = document.getElementById('results');
    resultsSection.style.display = 'none';

    // Tạo thông báo lỗi
    const formSection = document.querySelector('.form-section');
    
    // Xóa thông báo cũ nếu có
    const existingError = formSection.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }

    // Thêm thông báo lỗi mới
    const errorEl = document.createElement('div');
    errorEl.className = 'error-message';
    errorEl.textContent = message;
    formSection.insertBefore(errorEl, formSection.firstChild);

    // Tự động xóa thông báo lỗi sau 4 giây
    setTimeout(() => {
        errorEl.remove();
    }, 4000);
}

// ===== NEW FEATURES =====

// Debounce utility for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Smooth scroll utility
function smoothScrollTo(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80; // Account for navbar height
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Handle navbar visibility and active section highlighting
function handleScroll() {
    const navbar = document.getElementById('navbar');
    const backToTopBtn = document.getElementById('back-to-top');
    const scrollY = window.scrollY;

    // Add shadow to navbar on scroll
    if (scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Show/hide back-to-top button
    if (scrollY > 200) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }

    // Highlight active section in navbar
    const sections = ['top', 'form-section', 'results', 'footer'];
    let currentSection = 'top';

    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
                currentSection = sectionId;
            }
        }
    });

    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Initialize scroll handling
document.addEventListener('DOMContentLoaded', function() {
    // Existing event listeners
    const subjectInputs = document.querySelectorAll('input[name="subject-choice"]');
    subjectInputs.forEach(input => {
        input.addEventListener('change', handleSubjectSelection);
    });

    // New event listeners - only for internal links (starting with #)
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            smoothScrollTo(targetId);
        });
    });

    // Debounced scroll handler
    const debouncedHandleScroll = debounce(handleScroll, 10);
    window.addEventListener('scroll', debouncedHandleScroll);

    // Initial scroll check
    handleScroll();
});

// Loading effect for search button
function showLoading(button) {
    button.disabled = true;
    button.innerHTML = '⏳ Đang xử lý...';
    button.style.opacity = '0.7';
}

function hideLoading(button) {
    button.disabled = false;
    button.innerHTML = '🔍 Xem Kết Quả';
    button.style.opacity = '1';
}

// Modified searchByBlock with loading effect
function searchByBlock() {
    const button = document.querySelector('.btn-submit');
    showLoading(button);

    // Simulate processing time for UX
    setTimeout(() => {
        const selectedBlocks = Array.from(document.querySelectorAll('input[name="block-choice"]:checked'))
            .map(input => input.value);

        if (selectedBlocks.length === 0) {
            showError('Vui lòng chọn ít nhất một khối tổ hợp');
            hideLoading(button);
            return;
        }

        // display
        const blockToDisplay = selectedBlocks[0];
        
        // so thich
        const selectedInterests = Array.from(document.querySelectorAll('input[name="interest"]:checked'))
            .map(input => input.value);

        // 
        let careers = [];
        const blockCareers = careerData[blockToDisplay];
        
        if (selectedInterests.length > 0 && blockCareers) {
            selectedInterests.forEach(interest => {
                if (blockCareers[interest]) {
                    careers = careers.concat(blockCareers[interest]);
                }
            });
        } else if (blockCareers) {
            careers = getDefaultCareers(blockToDisplay);
        }

        
        const universities = universityData[blockToDisplay] || {};

        // kq
        displayResults(blockToDisplay, careers, universities);
        
        // Hide loading
        hideLoading(button);
    }, 500);
}

// Optimized displayResults with documentFragment
function displayResults(subject, careers, universities) {
    console.log('displayResults called with:', {subject, careers, universities});
    
    try {
        // xuat kết quả
        const resultsSection = document.getElementById('results');
        if (!resultsSection) {
            console.error('results element not found');
            return;
        }
        resultsSection.style.display = 'block';
        
        // Hiển thị hướng dẫn thang điểm nếu có nhiều thang
        const scaleGuide = document.getElementById('scaleGuide');
        if (scaleGuide && universities && Object.keys(universities).length > 1) {
            scaleGuide.style.display = 'block';
        } else if (scaleGuide) {
            scaleGuide.style.display = 'none';
        }

        // Cập nhật tên môn học (block name)
        const selectedSubjectEl = document.getElementById('selectedSubject');
        if (selectedSubjectEl) {
            selectedSubjectEl.textContent = subjectNames[subject] || subject.toUpperCase();
        }

        // Hiển thị danh sách ngành nghề using documentFragment
        const careersContainer = document.getElementById('careers');
        if (careersContainer) {
            const fragment = document.createDocumentFragment();
            
            if (careers && careers.length > 0) {
                careers.forEach(career => {
                    const careerEl = document.createElement('div');
                    careerEl.className = 'career-item';
                    careerEl.innerHTML = `
                        <div class="career-title">${career.name}</div>
                        <div class="career-description">${career.desc}</div>
                    `;
                    fragment.appendChild(careerEl);
                });
            } else {
                const noDataEl = document.createElement('div');
                noDataEl.style.cssText = 'text-align: center; color: #999; padding: 20px;';
                noDataEl.textContent = 'Không có dữ liệu ngành nghề phù hợp';
                fragment.appendChild(noDataEl);
            }
            
            careersContainer.innerHTML = '';
            careersContainer.appendChild(fragment);
        }

        // Hiển thị danh sách các trường đại học theo thang điểm using documentFragment
        const universitiesContainer = document.getElementById('universities');
        if (universitiesContainer) {
            const fragment = document.createDocumentFragment();
            
            // Sắp xếp theo thang điểm
            const scales = Object.keys(universities).map(Number).sort((a, b) => a - b);
            
            if (scales.length > 0) {
                scales.forEach(scale => {
                    const unis = universities[scale];
                    
                    // Tạo header cho thang điểm
                    const scaleHeader = document.createElement('div');
                    scaleHeader.style.cssText = `
                        background: linear-gradient(135deg, #00c853 0%, #64dd17 100%);
                        color: white;
                        padding: 12px 16px;
                        margin: 16px 0 8px 0;
                        border-radius: 8px;
                        font-weight: bold;
                        font-size: 16px;
                    `;
                    scaleHeader.innerHTML = `📊 Thang ${scale}`;
                    fragment.appendChild(scaleHeader);
                    
                    // Hiển thị các trường thuộc thang này
                    unis.forEach(uni => {
                        const uniEl = document.createElement('div');
                        uniEl.className = 'university-item';
                        
                        // Thêm ghi chú về cách tính điểm
                        let noteText = '';
                        if (uni.notes) {
                            noteText = `<div style="font-size: 12px; color: #666; margin-top: 4px; font-style: italic;">💡 ${uni.notes}</div>`;
                        }
                        
                        uniEl.innerHTML = `
                            <div class="university-info">
                                <div class="university-name">${uni.name}</div>
                                <div class="university-major">📚 ${uni.major}</div>
                                ${noteText}
                            </div>
                            <div class="average-score">${uni.score}</div>
                        `;
                        fragment.appendChild(uniEl);
                    });
                });
            } else {
                const noDataEl = document.createElement('div');
                noDataEl.style.cssText = 'text-align: center; color: #999; padding: 20px;';
                noDataEl.textContent = 'Không có dữ liệu trường đại học';
                fragment.appendChild(noDataEl);
            }
            
            universitiesContainer.innerHTML = '';
            universitiesContainer.appendChild(fragment);
        }

        // Scroll to results only once (removed duplicate call)
        smoothScrollTo('results');
    } catch(error) {
        console.error('Error in displayResults:', error);
    }
}
