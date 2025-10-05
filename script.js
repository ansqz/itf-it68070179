let accountBalance = 1000;
let cashBalance = 1000;

// ฟังก์ชันเปลี่ยนยอดเงินด้วย input ด้านบน
function changeBalance() {
    accountBalance = Number(document.getElementById('accountBalance').value);
    cashBalance = Number(document.getElementById('cashBalance').value);
    updateHistory(`Current account balance: ${accountBalance}, Current cash balance: ${cashBalance}`);
}

// ฟังก์ชันฝาก-ถอน
function proceed() {
    const operation = document.getElementById('operation').value;
    const amount = Number(document.getElementById('opAmount').value);

    if (amount <= 0) {
        alert("Please enter a valid amount");
        return;
    }

    if (operation === "deposit") {
        accountBalance += amount;
        cashBalance -= amount;
        updateHistory(`Deposited ${amount}. Account= ${accountBalance}, Cash= ${cashBalance}`);
    } else if (operation === "withdraw") {
        if (accountBalance >= amount) {
            accountBalance -= amount;
            cashBalance += amount;
            updateHistory(`Withdrew ${amount}. Account= ${accountBalance}, Cash= ${cashBalance}`);
        } else {
            alert("Insufficient account balance");
        }
    }

    // อัปเดต input fields ให้ตรงกับยอดปัจจุบัน
    document.getElementById('accountBalance').value = accountBalance;
    document.getElementById('cashBalance').value = cashBalance;
}

// ฟังก์ชันอัปเดตประวัติใน textarea
function updateHistory(message) {
    const history = document.getElementById('history');
    history.value += message + "\n";
    history.scrollTop = history.scrollHeight; // เลื่อนลงอัตโนมัติ
}

// ฟังก์ชันตัวอย่างสำหรับ Currency Converter
function convert() {
    const input = document.querySelector('.tools input').value;
    const output = document.getElementById('output');
    const currency = document.querySelector('.tools select').value;

    let result = 0;
    if (currency === "USD") {
        result = input * 0.03; // ตัวอย่างอัตราแปลง THB -> USD
    } else if (currency === "THB") {
        result = input * 33; // ตัวอย่างอัตราแปลง USD -> THB
    }
    output.value = result.toFixed(2);
}
