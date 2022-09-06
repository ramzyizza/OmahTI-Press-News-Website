Halo panitia OPREC FE 2022

Perkenalkan nama aku Ramzy dari Ilmu Komputer 21
di OPREC OTI ini aku mendaftar FE sebagai pilihan pertama dan aku tidak mengambil kesempatan
pilihan 2-3-4 lainnya karena bener-bener mau fokus ke FE aja :D, jadi aku gamau kehilangan
kesempatan terbaik ini.

Di project penugasan ini, initial plan aku adalah untuk menggunakan nextJS + tailwindCSS dan udah
sempet implementasi sedikit-sedikit. Tapi karena ada masalah teknis dan error di rendering 
dan aku debug terlalu lama + dirasa secara feature dan kebutuhan dari web static ini sangat simpel,
jadi akhirnya beralih untuk fokus ke MVP dan waktu dulu. 

Sehingga project ini finalnya menggunakan HTML + TailwindCSS aja. Sempet ada problematic juga diinstallasi
Tailwind NPM make CLI, padahal di previous project sempet bisa jadi aku memutuskan make CDN untuk sementara 
waktu, meskipun tidak baik secara best practice di project besar :D.

Oke tanpa banyak abstrak diatas, langsung masuk ke added featuresnya.


-FIGMA : https://s.id/figma-fe
Aku mulai dari design Figmanya dulu yang sebenernya udah di provide oleh panitia dengan size desktop
tapi aku inisiatif buat replicate project dan extend prototypenya dari 2xl - xl - lg - md - sm

In addition, di prototype designnya aku nambah dark-mode di setiap ukuran + ngeposition element2 di tiap width.
Bagian design guideline juga ditambahkan favicon supaya ga blank + beberapa tambahan color pallete di state dark mode


-RESPONSIVE
Web ini juga udah support responsive design dari mobile sampe desktop >2xl. Untuk implementasi designnya mirip-mirip dengan
apa yang ada di figma. Untuk eksekusi code tailwindnya aku make mobile first approach sebagai default codenya, dan baru mulai
bikin tiap state devices dari sm -> 2xl


-ANIMATION HOVER & CLICK
Di beberapa buttons, cards, judul, navigation element, etc (coba aja satu2) itu aku implementasi animation dengan transisi duration
agar smooth. Juga berfungsi secara normal (inverse) pas lagi di state dark mode


-MAILTO & HYPERLINKS
Beberapa elemen yang dicantumkan di web, kalo misalnya kalian click itu bakal ngeredirect ke website tertentu. Jadi biar penasaran
dicoba aja satu-satu hehe


-DARK MODE
Salah satu feature yang trending saat-saat ini adalah dark mode apalagi tailwind juga mempermudah developer untuk develop web darkmode
Karena itu, untuk membuat UX lebih seamless, aku menambah feature darkmode yang parameternya dari browser / settingan device kalian.

Jadi kalo device kalian misal windows/macOS lagi light mode maka web jadi light mode, dan kalo device kalian systemnya lagi dark mode
maka web akan berubah jadi dark mode


-KONTEN & IMAGES
Karena disebutkan bahwa kriteria penugasan ini adalah untuk memasukan image di grey area, maka aku masukin beberapa konten-konten
terbaru dari IG OmahTI, lalu untuk writer's of the month make foto formal OmahTI kalian wkwkwkwk. 

-WEB DEPLOY
Web ini udah aku deploy ke netlify melalui github di link https://ramzy-fe.netlify.app/


Oke, sebagai penutup dari readme text ini, beberapa key takeaways yang bisa kuambil dan dipelajari di project ini adalah:
-Pentingnya menulis code lebih rapih + concise
-Pentingnya code readability (bisa dengan tambahand deskripsi comment) apalagi tailwind terdiri dari multiple utility classes
-Pentingnya MVP + time pressure project
-Pentingnya penggunaan tags + class yang lebih effisien buat mengurangi redundancy code
-Pentingnya fundamental flexbox grid box model responsive etc
-Pentingnya pemahaman dasar UI/UX

Meski dari semua yang disebutkan diatas itu hal yang bisa aku ambil, tapi ga menutup kemungkinan kalo masih ada beberapa mistakes yang
mungkin bisa ditemuin di code yang nantinya bisa dikurangin seiring aku belajar kedepannya 😄.

Sip sekian, udah kebanyakan ngomong nih, kalo mau nanya apa-apa via interview atau chat wa/line aja yaa. byebyee makasih tim fe dan panitia
Tugasnya seru dan menantang 👍.




