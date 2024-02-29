function showQuestions() {
    // Lấy thông tin từ form
    const fullName = document.getElementById('fullName').value;
    const dob = document.getElementById('dob').value;
    const studentId = document.getElementById('studentId').value;
    const studentClass = document.getElementById('class').value;

    // Kiểm tra xem đã nhập tất cả thông tin chưa
    if (!fullName || !dob || !studentId || !studentClass) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    // Ẩn form thông tin
    document.getElementById('infoForm').style.display = 'none';

    // Hiển thị phần câu hỏi
    const questionSection = document.getElementById('questionSection');
    questionSection.style.display = 'block';

    const correctAnswers = {
        '1': 'A', // Câu 1, đáp án đúng là A
        '2': 'B', 
        '3': 'C',
        '4': 'D',
        '5': 'A',
        '6': 'B',
        '7': 'C',
        '8': 'D',
        '9': 'A',
        '10': 'B',
        // Câu Đúng sai
        '11': 'True', 
        '12': 'False', 
        '13': 'True', 
        '14': 'False', 
        '15': 'True', 
        '16': 'False', 
        '17': 'False', 
        '18': 'True', 
        '19': 'False', 
        '20': 'False'        
      };
      

    // Tạo câu hỏi demo (ở đây là 40 câu hỏi giả định)
    for (let i = 1; i <= 10; i++) {
        const questionDiv = document.createElement('div');
        questionDiv.innerHTML = `
            <p>Câu ${i}: Đây là nội dung câu hỏi số ${i}?</p>
            <input type="radio" name="question${i}" value="A"> A. Lựa chọn A<br>
            <input type="radio" name="question${i}" value="B"> B. Lựa chọn B<br>
            <input type="radio" name="question${i}" value="C"> C. Lựa chọn C<br>
            <input type="radio" name="question${i}" value="D"> D. Lựa chọn D
        `;
        questionSection.appendChild(questionDiv);
    }
    for (let i = 11; i <= 20; i++) {
        const questionDiv = document.createElement('div');
        questionDiv.innerHTML = `
            <p>Câu ${i}: Đây là câu hỏi Đúng/Sai số ${i}?</p>
            <input type="radio" name="question${i}" value="True"> Đúng<br>
            <input type="radio" name="question${i}" value="False"> Sai
        `;
        questionSection.appendChild(questionDiv);
    }
    for (let i = 21; i <= 30; i++) {
        const questionDiv = document.createElement('div');
        questionDiv.innerHTML = `
            <p>Câu ${i}: Đây là câu hỏi tự luận số ${i}. Vui lòng nhập câu trả lời của bạn:</p>
            <textarea name="question${i}" rows="4" cols="50"></textarea>
        `;
        questionSection.appendChild(questionDiv);
    }
    for (let i = 31; i <= 40; i++) {
        const questionDiv = document.createElement('div');
        questionDiv.innerHTML = `
            <p>Câu ${i}: Đây là nội dung câu hỏi số ${i} cho phép nhiều đáp án?</p>
            <input type="checkbox" name="question${i}" value="A"> A. Lựa chọn A<br>
            <input type="checkbox" name="question${i}" value="B"> B. Lựa chọn B<br>
            <input type="checkbox" name="question${i}" value="C"> C. Lựa chọn C<br>
            <input type="checkbox" name="question${i}" value="D"> D. Lựa chọn D
        `;
        questionSection.appendChild(questionDiv);
    }
    document.getElementById('submitButton').style.display = 'block';
    document.getElementById('submitButton').addEventListener('click', function() {
        let score = 0;
        const totalQuestions = Object.keys(correctAnswers).length;
    
        // Duyệt qua mỗi câu hỏi
        for (let questionId in correctAnswers) {
            let userAnswer = document.querySelector(`input[name="question${questionId}"]:checked`);
            if (userAnswer && userAnswer.value === correctAnswers[questionId]) {
                score++;
            }
        }
        questionSection.style.display = 'none';
        document.getElementById('submitButton').style.display = 'none';
        resultSection.style.display = 'block';
        resultSection.innerHTML = `<p style="font-size: 30px; margin-top: 20px; margin-left: 40%">Điểm số của bạn là: ${score} / 40</p>`;
    });
    
   
}
