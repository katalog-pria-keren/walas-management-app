/**
 * APLIKASI MANAJEMEN WALI KELAS (WALAS)
 * Google Apps Script - Backend Logic
 * Version: 1.0
 */

// SPREADSHEET CONFIGURATION
const SS_ID = SpreadsheetApp.getActiveSpreadsheet().getId();
const SS = SpreadsheetApp.getActiveSpreadsheet();

const SHEET_SISWA = 'Database_Siswa';
const SHEET_ABSENSI = 'Absensi';
const SHEET_MAPEL = 'Mapel_Guru';
const SHEET_TUGAS = 'Tugas';
const SHEET_CONFIG = 'Konfigurasi';

// MAIN ENTRY POINT
function doGet() {
  const htmlOutput = HtmlService.createHtmlOutputFromFile('UI');
  htmlOutput.setWidth(1200).setHeight(800);
  return htmlOutput.addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

// ===== FUNGSI AMBIL DATA =====

function getStudentList() {
  try {
    const sheet = SS.getSheetByName(SHEET_SISWA);
    if (!sheet) return { success: false, message: 'Sheet tidak ditemukan' };
    
    const data = sheet.getDataRange().getValues();
    const students = [];
    
    for (let i = 1; i < data.length; i++) {
      if (data[i][0] === '') continue;
      students.push({
        no: i,
        nama: data[i][0],
        noHpSiswa: data[i][1],
        namaOrtu: data[i][2],
        noHpOrtu: data[i][3]
      });
    }
    
    return { success: true, data: students, count: students.length };
  } catch (error) {
    return { success: false, message: error.toString() };
  }
}

function getTodayAbsence() {
  try {
    const sheet = SS.getSheetByName(SHEET_ABSENSI);
    if (!sheet) return { success: false, message: 'Sheet absensi tidak ditemukan' };
    
    const today = new Date();
    const todayStr = formatDate(today);
    const data = sheet.getDataRange().getValues();
    const absences = [];
    
    for (let i = 1; i < data.length; i++) {
      const rowDate = data[i][0];
      const rowDateStr = rowDate instanceof Date ? formatDate(rowDate) : rowDate;
      
      if (rowDateStr === todayStr) {
        absences.push({
          tanggal: data[i][0],
          namaSiswa: data[i][1],
          status: data[i][2]
        });
      }
    }
    
    return { success: true, data: absences, date: todayStr };
  } catch (error) {
    return { success: false, message: error.toString() };
  }
}

function getTodaySchedule() {
  try {
    const sheet = SS.getSheetByName(SHEET_MAPEL);
    if (!sheet) return { success: false, message: 'Sheet jadwal tidak ditemukan' };
    
    const today = new Date();
    const dayName = getDayName(today.getDay());
    const data = sheet.getDataRange().getValues();
    const schedules = [];
    
    for (let i = 1; i < data.length; i++) {
      if (data[i][3] === dayName) {
        schedules.push({
          mapel: data[i][1],
          guru: data[i][2],
          jamMulai: data[i][4],
          jamSelesai: data[i][5]
        });
      }
    }
    
    schedules.sort((a, b) => a.jamMulai.localeCompare(b.jamMulai));
    return { success: true, data: schedules, hari: dayName };
  } catch (error) {
    return { success: false, message: error.toString() };
  }
}

function getPendingTasks() {
  try {
    const sheet = SS.getSheetByName(SHEET_TUGAS);
    if (!sheet) return { success: false, message: 'Sheet tugas tidak ditemukan' };
    
    const data = sheet.getDataRange().getValues();
    const tasks = [];
    
    for (let i = 1; i < data.length; i++) {
      if (data[i][0] === '') continue;
      
      const status = (data[i][4] || 'Pending').toLowerCase();
      
      if (status !== 'selesai' && status !== 'done') {
        tasks.push({
          no: i,
          mapel: data[i][1],
          deskripsi: data[i][2],
          deadline: data[i][3],
          status: data[i][4]
        });
      }
    }
    
    tasks.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
    return { success: true, data: tasks, count: tasks.length };
  } catch (error) {
    return { success: false, message: error.toString() };
  }
}

function getAllDashboardData() {
  try {
    return {
      success: true,
      students: getStudentList(),
      todayAbsence: getTodayAbsence(),
      todaySchedule: getTodaySchedule(),
      pendingTasks: getPendingTasks(),
      timestamp: new Date().toString()
    };
  } catch (error) {
    return { success: false, message: error.toString() };
  }
}

// ===== FUNGSI INPUT DATA =====

function recordAbsence(namaSiswa, status) {
  try {
    const sheet = SS.getSheetByName(SHEET_ABSENSI);
    if (!sheet) return { success: false, message: 'Sheet absensi tidak ditemukan' };
    
    const validStatus = ['Hadir', 'Alfa', 'Sakit', 'Izin'];
    if (!validStatus.includes(status)) {
      return { success: false, message: 'Status tidak valid' };
    }
    
    const today = new Date();
    sheet.appendRow([today, namaSiswa, status]);
    
    return { 
      success: true, 
      message: `Absensi ${namaSiswa} - ${status} tercatat`
    };
  } catch (error) {
    return { success: false, message: error.toString() };
  }
}

// ===== FUNGSI EXPORT =====

function generateMonthlyRecap(month, year) {
  try {
    const sheet = SS.getSheetByName(SHEET_ABSENSI);
    if (!sheet) return { success: false, message: 'Sheet absensi tidak ditemukan' };
    
    const data = sheet.getDataRange().getValues();
    const monthlyData = {};
    
    for (let i = 1; i < data.length; i++) {
      const rowDate = data[i][0];
      if (!(rowDate instanceof Date)) continue;
      
      if (rowDate.getMonth() + 1 === month && rowDate.getFullYear() === year) {
        const nama = data[i][1];
        const status = data[i][2];
        
        if (!monthlyData[nama]) {
          monthlyData[nama] = { Hadir: 0, Alfa: 0, Sakit: 0, Izin: 0 };
        }
        monthlyData[nama][status]++;
      }
    }
    
    const newSheet = SS.insertSheet(`Rekap_${month}-${year}`, 0);
    newSheet.appendRow(['No', 'Nama Siswa', 'Hadir', 'Alfa', 'Sakit', 'Izin', 'Total']);
    
    let no = 1;
    for (const nama in monthlyData) {
      const record = monthlyData[nama];
      const total = record.Hadir + record.Alfa + record.Sakit + record.Izin;
      
      newSheet.appendRow([no, nama, record.Hadir, record.Alfa, record.Sakit, record.Izin, total]);
      no++;
    }
    
    const headerRange = newSheet.getRange(1, 1, 1, 7);
    headerRange.setBackground('#4285F4');
    headerRange.setFontColor('#FFFFFF');
    headerRange.setFontWeight('bold');
    
    for (let i = 1; i <= 7; i++) {
      newSheet.autoResizeColumn(i);
    }
    
    return { success: true, message: `Rekap ${month}-${year} dibuat`, sheetName: `Rekap_${month}-${year}` };
  } catch (error) {
    return { success: false, message: error.toString() };
  }
}

// ===== UTILITY FUNCTIONS =====

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function getDayName(dayNumber) {
  const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  return days[dayNumber];
}