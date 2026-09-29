function calculateBalance() {
    let income = Number(document.getElementById("income").value);
    let expense = Number(document.getElementById("expense").value);

    let balance = income - expense;

    document.getElementById("balance").textContent =
        "Balance: KSh " + balance;
}
