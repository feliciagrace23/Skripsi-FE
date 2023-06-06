import React from "react";
import Footer from "./footer";

import MyDropzone from "./components/dropFile";
import styles from "src/styles/Home.module.css";
import { Stack, Grid } from "@mui/material";
import refresh from "../../public/img_pref/refresh.png";
import upload from "../../public/img_pref/upload.png";
import download from "../../public/img_pref/download.png";

function MainPage() {
  return (
    <div className={styles.background}>
      <div>
        <br />

        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="center"
          className={styles.content}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <div>
                <h1 className={styles.header_1}> Segmentasi Citra Medis</h1>
                <h1 className={styles.header_2}> Abdomen Axial</h1>
                <br /> <br />
                <p className={styles.text}>
                  Aplikasi ini ditujukan untuk melakukan segmentasi pada organ
                  Ginjal, Hati, dan Limpa. Dengan masukan berupa gambar CT Scan
                  abdomen axial. Berikut prosedur penggunaan aplikasi:
                </p>
                {/* <ol className={styles.content_child}>
              <li>Unggah <b>sebuah</b> gambar CT Scan Abdomen Axial dan tekanlah tombol <b>Submit</b>. Klik download untuk mengunduh gambar sample.</li>
              <li>Jika ingin melakukan segmentasi lagi, pengguna dapat mengunggah ulang kembali gambar.</li>
              <li>Refresh kembali halaman untuk menghilangkan hasil segmentasi.</li>
            </ol> */}
              </div>
            </Grid>
            <Grid item xs={12} sm={6} className={styles.content_2}>
              <img
                src="https://www.casestacks.com/wp-content/uploads/2019/07/x.m.abdpelv.12.png"
                alt="CTScan label"
                className={styles.img_header}
              />
            </Grid>
          </Grid>
        </Stack>

        <div className={styles.div_prosedur}>
          <h1 className={styles.header_3}> Prosedur Penggunaan</h1>
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <Grid container spacing={2} className={styles.text_prosedur}>
              <Grid item xs={12} sm={4} className={styles.text_prosedur_bg}>
                <img src={download.src} className={styles.img_prosedur} />
                <p> STEP 1</p> <br />
                <p>
                  Unggah <b>sebuah</b> gambar CT Scan Abdomen Axial dan tekanlah
                  tombol <b>Submit</b>. Klik download untuk mengunduh gambar
                  sample.
                </p>
              </Grid>

              <Grid item xs={12} sm={4} className={styles.text_prosedur_bg}>
                <img src={upload.src} className={styles.img_prosedur} />
                <p> STEP 2</p> <br /> <br />
                <p>
                  Jika ingin melakukan segmentasi lagi, pengguna dapat
                  mengunggah ulang kembali gambar.
                </p>
              </Grid>

              <Grid item xs={12} sm={4} className={styles.text_prosedur_bg}>
                <img src={refresh.src} className={styles.img_prosedur} />
                <p>STEP 3</p>
                <br /> <br />
                <p>
                  Refresh kembali halaman untuk menghilangkan hasil segmentasi.
                </p>
              </Grid>
            </Grid>
          </Stack>
        </div>
      </div>

      <MyDropzone />
      <Footer />
    </div>
  );
}

export default MainPage;
