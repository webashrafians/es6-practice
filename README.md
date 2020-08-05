# es6-practice
…or create a new repository on the command line
echo "# es6-practice" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/webashrafians/es6-practice.git
git push -u origin master
                
…or push an existing repository from the command line
git remote add origin https://github.com/webashrafians/es6-practice.git
git push -u origin master
…or import code from another repository
You can initialize this repository with code from a Subversion, Mercurial, or TFS project.



///////////////////$RECYCLE.BIN

ফাংশন ব্যবহারের সময় যদি প্যারামিটার ব্যবহার করা হয় এবং কল করার সময় প্যারামিটার না  দেওয়া হয় তো ইরর আসে। এ জন্য কিছু ডিফল্ট পদ্ধতি আছে।
ফাংশনের মধ্যে ফাংশন রিটার্ন করার আগে দ্বিতীয় প্যারামিটার টা এভাবে লেখা যেতে পারে।
// num2 = num2 + 0;

অথবা দ্বিতীয় প্যারামিটার ঘোষনার সময়ই ডিফল্‌ট ভ্যালু ঘোষণা করা।
function add(num1, num2 = 20){ এভাবে ঘোষনা করলে কল করার সময় ভুল করে ২য় প্যারামিটার না দিলেও ইরর আসেব না।
const total = add(15)

