
const firebaseConfig = {

 apiKey: "AIzaSyCYW3dyYDyk16WfKvr84mP3vKI-G7oRtk8",
  authDomain: "razan-d7663.firebaseapp.com",
  projectId: "razan-d7663",
};

// تهيئة Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// إضافة مستخدم
function addUser() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;

    db.collection("users").add({
        name: name,
        age: age
    }).then(() => {
        alert("تمت الإضافة بنجاح");
    });
}

// عرض المستخدمين
db.collection("users").onSnapshot(
    snapshot => {
    const list = document.getElementById("users");
    list.innerHTML = "";

    snapshot.forEach(
        
        doc => {
        list.innerHTML += `
            <li>
                ${doc.data().name} - ${doc.data().age}
                <button onclick="deleteUser('${doc.id}')">حذف</button> 
            </li>
        `; 
    }
);
}
);

// حذف مستخدم
function deleteUser(id) {
    db.collection("users").doc(id).delete();
}