import type { WeatherMonth, DestinationWeather } from './types'

export const weatherData: DestinationWeather[] = [
  // ───────────────────────────────────────────────
  // COLORADO
  // ───────────────────────────────────────────────
  {
    slug: 'vail',
    monthly: [
      { month: 'January', avgHighF: 28, avgLowF: 4, avgSnowfallInches: 28, snowDays: 16, sunnyDays: 17 },
      { month: 'February', avgHighF: 31, avgLowF: 6, avgSnowfallInches: 24, snowDays: 14, sunnyDays: 16 },
      { month: 'March', avgHighF: 38, avgLowF: 13, avgSnowfallInches: 26, snowDays: 15, sunnyDays: 18 },
      { month: 'April', avgHighF: 46, avgLowF: 22, avgSnowfallInches: 14, snowDays: 10, sunnyDays: 18 },
      { month: 'May', avgHighF: 56, avgLowF: 31, avgSnowfallInches: 4, snowDays: 3, sunnyDays: 20 },
      { month: 'June', avgHighF: 67, avgLowF: 38, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 24 },
      { month: 'July', avgHighF: 74, avgLowF: 44, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 25 },
      { month: 'August', avgHighF: 72, avgLowF: 43, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 24 },
      { month: 'September', avgHighF: 64, avgLowF: 35, avgSnowfallInches: 1, snowDays: 1, sunnyDays: 23 },
      { month: 'October', avgHighF: 51, avgLowF: 24, avgSnowfallInches: 7, snowDays: 5, sunnyDays: 21 },
      { month: 'November', avgHighF: 37, avgLowF: 13, avgSnowfallInches: 18, snowDays: 11, sunnyDays: 18 },
      { month: 'December', avgHighF: 28, avgLowF: 4, avgSnowfallInches: 26, snowDays: 15, sunnyDays: 17 },
    ],
  },
  {
    slug: 'breckenridge',
    monthly: [
      { month: 'January', avgHighF: 30, avgLowF: 2, avgSnowfallInches: 24, snowDays: 15, sunnyDays: 18 },
      { month: 'February', avgHighF: 32, avgLowF: 4, avgSnowfallInches: 21, snowDays: 13, sunnyDays: 17 },
      { month: 'March', avgHighF: 38, avgLowF: 11, avgSnowfallInches: 25, snowDays: 14, sunnyDays: 19 },
      { month: 'April', avgHighF: 46, avgLowF: 20, avgSnowfallInches: 16, snowDays: 10, sunnyDays: 18 },
      { month: 'May', avgHighF: 55, avgLowF: 28, avgSnowfallInches: 5, snowDays: 4, sunnyDays: 20 },
      { month: 'June', avgHighF: 65, avgLowF: 35, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 23 },
      { month: 'July', avgHighF: 72, avgLowF: 41, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 24 },
      { month: 'August', avgHighF: 70, avgLowF: 40, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 24 },
      { month: 'September', avgHighF: 62, avgLowF: 32, avgSnowfallInches: 2, snowDays: 1, sunnyDays: 22 },
      { month: 'October', avgHighF: 49, avgLowF: 21, avgSnowfallInches: 9, snowDays: 6, sunnyDays: 20 },
      { month: 'November', avgHighF: 36, avgLowF: 10, avgSnowfallInches: 19, snowDays: 12, sunnyDays: 18 },
      { month: 'December', avgHighF: 29, avgLowF: 2, avgSnowfallInches: 23, snowDays: 15, sunnyDays: 17 },
    ],
  },
  {
    slug: 'aspen-snowmass',
    monthly: [
      { month: 'January', avgHighF: 32, avgLowF: 5, avgSnowfallInches: 25, snowDays: 14, sunnyDays: 19 },
      { month: 'February', avgHighF: 35, avgLowF: 8, avgSnowfallInches: 22, snowDays: 12, sunnyDays: 18 },
      { month: 'March', avgHighF: 41, avgLowF: 15, avgSnowfallInches: 24, snowDays: 13, sunnyDays: 20 },
      { month: 'April', avgHighF: 50, avgLowF: 24, avgSnowfallInches: 12, snowDays: 8, sunnyDays: 20 },
      { month: 'May', avgHighF: 60, avgLowF: 33, avgSnowfallInches: 3, snowDays: 2, sunnyDays: 22 },
      { month: 'June', avgHighF: 71, avgLowF: 40, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 25 },
      { month: 'July', avgHighF: 78, avgLowF: 46, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 26 },
      { month: 'August', avgHighF: 76, avgLowF: 44, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 25 },
      { month: 'September', avgHighF: 67, avgLowF: 36, avgSnowfallInches: 1, snowDays: 1, sunnyDays: 24 },
      { month: 'October', avgHighF: 54, avgLowF: 25, avgSnowfallInches: 6, snowDays: 4, sunnyDays: 22 },
      { month: 'November', avgHighF: 40, avgLowF: 14, avgSnowfallInches: 16, snowDays: 10, sunnyDays: 19 },
      { month: 'December', avgHighF: 32, avgLowF: 6, avgSnowfallInches: 23, snowDays: 14, sunnyDays: 18 },
    ],
  },
  {
    slug: 'steamboat',
    monthly: [
      { month: 'January', avgHighF: 27, avgLowF: 0, avgSnowfallInches: 36, snowDays: 18, sunnyDays: 15 },
      { month: 'February', avgHighF: 30, avgLowF: 2, avgSnowfallInches: 30, snowDays: 16, sunnyDays: 15 },
      { month: 'March', avgHighF: 38, avgLowF: 10, avgSnowfallInches: 32, snowDays: 16, sunnyDays: 17 },
      { month: 'April', avgHighF: 47, avgLowF: 20, avgSnowfallInches: 18, snowDays: 11, sunnyDays: 17 },
      { month: 'May', avgHighF: 58, avgLowF: 30, avgSnowfallInches: 4, snowDays: 3, sunnyDays: 19 },
      { month: 'June', avgHighF: 69, avgLowF: 37, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 22 },
      { month: 'July', avgHighF: 78, avgLowF: 44, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 24 },
      { month: 'August', avgHighF: 76, avgLowF: 42, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 24 },
      { month: 'September', avgHighF: 66, avgLowF: 34, avgSnowfallInches: 1, snowDays: 1, sunnyDays: 22 },
      { month: 'October', avgHighF: 52, avgLowF: 23, avgSnowfallInches: 8, snowDays: 5, sunnyDays: 20 },
      { month: 'November', avgHighF: 36, avgLowF: 10, avgSnowfallInches: 24, snowDays: 14, sunnyDays: 16 },
      { month: 'December', avgHighF: 26, avgLowF: 0, avgSnowfallInches: 34, snowDays: 18, sunnyDays: 14 },
    ],
  },
  {
    slug: 'telluride',
    monthly: [
      { month: 'January', avgHighF: 33, avgLowF: 6, avgSnowfallInches: 26, snowDays: 14, sunnyDays: 20 },
      { month: 'February', avgHighF: 36, avgLowF: 9, avgSnowfallInches: 23, snowDays: 12, sunnyDays: 19 },
      { month: 'March', avgHighF: 42, avgLowF: 16, avgSnowfallInches: 25, snowDays: 13, sunnyDays: 21 },
      { month: 'April', avgHighF: 50, avgLowF: 24, avgSnowfallInches: 13, snowDays: 8, sunnyDays: 21 },
      { month: 'May', avgHighF: 60, avgLowF: 33, avgSnowfallInches: 3, snowDays: 2, sunnyDays: 23 },
      { month: 'June', avgHighF: 71, avgLowF: 40, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 25 },
      { month: 'July', avgHighF: 77, avgLowF: 46, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 25 },
      { month: 'August', avgHighF: 75, avgLowF: 44, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 25 },
      { month: 'September', avgHighF: 67, avgLowF: 37, avgSnowfallInches: 1, snowDays: 1, sunnyDays: 24 },
      { month: 'October', avgHighF: 55, avgLowF: 26, avgSnowfallInches: 6, snowDays: 4, sunnyDays: 22 },
      { month: 'November', avgHighF: 41, avgLowF: 15, avgSnowfallInches: 16, snowDays: 10, sunnyDays: 20 },
      { month: 'December', avgHighF: 33, avgLowF: 7, avgSnowfallInches: 24, snowDays: 14, sunnyDays: 19 },
    ],
  },
  {
    slug: 'keystone',
    monthly: [
      { month: 'January', avgHighF: 28, avgLowF: 1, avgSnowfallInches: 22, snowDays: 14, sunnyDays: 17 },
      { month: 'February', avgHighF: 31, avgLowF: 4, avgSnowfallInches: 19, snowDays: 12, sunnyDays: 16 },
      { month: 'March', avgHighF: 37, avgLowF: 11, avgSnowfallInches: 22, snowDays: 13, sunnyDays: 18 },
      { month: 'April', avgHighF: 45, avgLowF: 20, avgSnowfallInches: 14, snowDays: 9, sunnyDays: 18 },
      { month: 'May', avgHighF: 54, avgLowF: 28, avgSnowfallInches: 5, snowDays: 4, sunnyDays: 19 },
      { month: 'June', avgHighF: 64, avgLowF: 35, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 23 },
      { month: 'July', avgHighF: 71, avgLowF: 41, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 24 },
      { month: 'August', avgHighF: 69, avgLowF: 40, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 24 },
      { month: 'September', avgHighF: 61, avgLowF: 32, avgSnowfallInches: 2, snowDays: 1, sunnyDays: 22 },
      { month: 'October', avgHighF: 48, avgLowF: 21, avgSnowfallInches: 8, snowDays: 5, sunnyDays: 20 },
      { month: 'November', avgHighF: 35, avgLowF: 10, avgSnowfallInches: 17, snowDays: 11, sunnyDays: 17 },
      { month: 'December', avgHighF: 28, avgLowF: 2, avgSnowfallInches: 21, snowDays: 14, sunnyDays: 16 },
    ],
  },
  {
    slug: 'copper-mountain',
    monthly: [
      { month: 'January', avgHighF: 29, avgLowF: 2, avgSnowfallInches: 25, snowDays: 15, sunnyDays: 17 },
      { month: 'February', avgHighF: 32, avgLowF: 5, avgSnowfallInches: 22, snowDays: 13, sunnyDays: 16 },
      { month: 'March', avgHighF: 38, avgLowF: 12, avgSnowfallInches: 24, snowDays: 14, sunnyDays: 18 },
      { month: 'April', avgHighF: 46, avgLowF: 21, avgSnowfallInches: 15, snowDays: 10, sunnyDays: 18 },
      { month: 'May', avgHighF: 55, avgLowF: 29, avgSnowfallInches: 5, snowDays: 3, sunnyDays: 20 },
      { month: 'June', avgHighF: 65, avgLowF: 36, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 23 },
      { month: 'July', avgHighF: 72, avgLowF: 42, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 24 },
      { month: 'August', avgHighF: 70, avgLowF: 41, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 24 },
      { month: 'September', avgHighF: 62, avgLowF: 33, avgSnowfallInches: 2, snowDays: 1, sunnyDays: 22 },
      { month: 'October', avgHighF: 49, avgLowF: 22, avgSnowfallInches: 8, snowDays: 5, sunnyDays: 20 },
      { month: 'November', avgHighF: 36, avgLowF: 11, avgSnowfallInches: 18, snowDays: 12, sunnyDays: 17 },
      { month: 'December', avgHighF: 29, avgLowF: 3, avgSnowfallInches: 24, snowDays: 15, sunnyDays: 16 },
    ],
  },
  {
    slug: 'winter-park',
    monthly: [
      { month: 'January', avgHighF: 27, avgLowF: -1, avgSnowfallInches: 30, snowDays: 17, sunnyDays: 16 },
      { month: 'February', avgHighF: 30, avgLowF: 2, avgSnowfallInches: 26, snowDays: 15, sunnyDays: 15 },
      { month: 'March', avgHighF: 37, avgLowF: 10, avgSnowfallInches: 28, snowDays: 15, sunnyDays: 18 },
      { month: 'April', avgHighF: 45, avgLowF: 19, avgSnowfallInches: 18, snowDays: 11, sunnyDays: 17 },
      { month: 'May', avgHighF: 54, avgLowF: 28, avgSnowfallInches: 6, snowDays: 4, sunnyDays: 19 },
      { month: 'June', avgHighF: 64, avgLowF: 35, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 22 },
      { month: 'July', avgHighF: 72, avgLowF: 42, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 23 },
      { month: 'August', avgHighF: 70, avgLowF: 40, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 23 },
      { month: 'September', avgHighF: 61, avgLowF: 32, avgSnowfallInches: 2, snowDays: 1, sunnyDays: 22 },
      { month: 'October', avgHighF: 48, avgLowF: 21, avgSnowfallInches: 10, snowDays: 6, sunnyDays: 20 },
      { month: 'November', avgHighF: 34, avgLowF: 9, avgSnowfallInches: 22, snowDays: 13, sunnyDays: 16 },
      { month: 'December', avgHighF: 27, avgLowF: 0, avgSnowfallInches: 28, snowDays: 17, sunnyDays: 15 },
    ],
  },

  // ───────────────────────────────────────────────
  // UTAH
  // ───────────────────────────────────────────────
  {
    slug: 'park-city',
    monthly: [
      { month: 'January', avgHighF: 33, avgLowF: 12, avgSnowfallInches: 32, snowDays: 16, sunnyDays: 14 },
      { month: 'February', avgHighF: 35, avgLowF: 14, avgSnowfallInches: 28, snowDays: 14, sunnyDays: 14 },
      { month: 'March', avgHighF: 43, avgLowF: 20, avgSnowfallInches: 30, snowDays: 14, sunnyDays: 16 },
      { month: 'April', avgHighF: 51, avgLowF: 27, avgSnowfallInches: 16, snowDays: 9, sunnyDays: 17 },
      { month: 'May', avgHighF: 62, avgLowF: 35, avgSnowfallInches: 3, snowDays: 2, sunnyDays: 20 },
      { month: 'June', avgHighF: 73, avgLowF: 42, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 25 },
      { month: 'July', avgHighF: 82, avgLowF: 50, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 27 },
      { month: 'August', avgHighF: 80, avgLowF: 48, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 27 },
      { month: 'September', avgHighF: 70, avgLowF: 39, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 25 },
      { month: 'October', avgHighF: 56, avgLowF: 28, avgSnowfallInches: 5, snowDays: 3, sunnyDays: 22 },
      { month: 'November', avgHighF: 41, avgLowF: 18, avgSnowfallInches: 20, snowDays: 11, sunnyDays: 16 },
      { month: 'December', avgHighF: 33, avgLowF: 12, avgSnowfallInches: 30, snowDays: 16, sunnyDays: 13 },
    ],
  },
  {
    slug: 'deer-valley',
    monthly: [
      { month: 'January', avgHighF: 32, avgLowF: 11, avgSnowfallInches: 34, snowDays: 17, sunnyDays: 14 },
      { month: 'February', avgHighF: 34, avgLowF: 13, avgSnowfallInches: 30, snowDays: 15, sunnyDays: 14 },
      { month: 'March', avgHighF: 42, avgLowF: 19, avgSnowfallInches: 32, snowDays: 15, sunnyDays: 16 },
      { month: 'April', avgHighF: 50, avgLowF: 26, avgSnowfallInches: 17, snowDays: 10, sunnyDays: 17 },
      { month: 'May', avgHighF: 61, avgLowF: 34, avgSnowfallInches: 3, snowDays: 2, sunnyDays: 20 },
      { month: 'June', avgHighF: 72, avgLowF: 41, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 25 },
      { month: 'July', avgHighF: 81, avgLowF: 49, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 27 },
      { month: 'August', avgHighF: 79, avgLowF: 47, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 27 },
      { month: 'September', avgHighF: 69, avgLowF: 38, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 25 },
      { month: 'October', avgHighF: 55, avgLowF: 27, avgSnowfallInches: 6, snowDays: 4, sunnyDays: 22 },
      { month: 'November', avgHighF: 40, avgLowF: 17, avgSnowfallInches: 22, snowDays: 12, sunnyDays: 16 },
      { month: 'December', avgHighF: 32, avgLowF: 11, avgSnowfallInches: 32, snowDays: 17, sunnyDays: 13 },
    ],
  },
  {
    slug: 'snowbird',
    monthly: [
      { month: 'January', avgHighF: 30, avgLowF: 14, avgSnowfallInches: 48, snowDays: 19, sunnyDays: 12 },
      { month: 'February', avgHighF: 32, avgLowF: 16, avgSnowfallInches: 42, snowDays: 17, sunnyDays: 12 },
      { month: 'March', avgHighF: 39, avgLowF: 22, avgSnowfallInches: 46, snowDays: 17, sunnyDays: 14 },
      { month: 'April', avgHighF: 47, avgLowF: 28, avgSnowfallInches: 28, snowDays: 13, sunnyDays: 15 },
      { month: 'May', avgHighF: 57, avgLowF: 36, avgSnowfallInches: 8, snowDays: 5, sunnyDays: 18 },
      { month: 'June', avgHighF: 68, avgLowF: 43, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 24 },
      { month: 'July', avgHighF: 78, avgLowF: 52, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 27 },
      { month: 'August', avgHighF: 76, avgLowF: 50, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 27 },
      { month: 'September', avgHighF: 66, avgLowF: 41, avgSnowfallInches: 1, snowDays: 1, sunnyDays: 24 },
      { month: 'October', avgHighF: 52, avgLowF: 30, avgSnowfallInches: 10, snowDays: 6, sunnyDays: 20 },
      { month: 'November', avgHighF: 38, avgLowF: 21, avgSnowfallInches: 32, snowDays: 14, sunnyDays: 14 },
      { month: 'December', avgHighF: 30, avgLowF: 15, avgSnowfallInches: 46, snowDays: 19, sunnyDays: 11 },
    ],
  },
  {
    slug: 'alta',
    monthly: [
      { month: 'January', avgHighF: 29, avgLowF: 13, avgSnowfallInches: 52, snowDays: 20, sunnyDays: 11 },
      { month: 'February', avgHighF: 31, avgLowF: 15, avgSnowfallInches: 46, snowDays: 18, sunnyDays: 11 },
      { month: 'March', avgHighF: 38, avgLowF: 21, avgSnowfallInches: 50, snowDays: 18, sunnyDays: 13 },
      { month: 'April', avgHighF: 46, avgLowF: 27, avgSnowfallInches: 30, snowDays: 14, sunnyDays: 14 },
      { month: 'May', avgHighF: 56, avgLowF: 35, avgSnowfallInches: 10, snowDays: 6, sunnyDays: 18 },
      { month: 'June', avgHighF: 67, avgLowF: 42, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 24 },
      { month: 'July', avgHighF: 77, avgLowF: 51, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 27 },
      { month: 'August', avgHighF: 75, avgLowF: 49, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 27 },
      { month: 'September', avgHighF: 65, avgLowF: 40, avgSnowfallInches: 2, snowDays: 1, sunnyDays: 24 },
      { month: 'October', avgHighF: 51, avgLowF: 29, avgSnowfallInches: 12, snowDays: 7, sunnyDays: 20 },
      { month: 'November', avgHighF: 37, avgLowF: 20, avgSnowfallInches: 36, snowDays: 15, sunnyDays: 13 },
      { month: 'December', avgHighF: 29, avgLowF: 14, avgSnowfallInches: 50, snowDays: 20, sunnyDays: 10 },
    ],
  },
  {
    slug: 'brighton',
    monthly: [
      { month: 'January', avgHighF: 30, avgLowF: 14, avgSnowfallInches: 44, snowDays: 18, sunnyDays: 12 },
      { month: 'February', avgHighF: 32, avgLowF: 16, avgSnowfallInches: 38, snowDays: 16, sunnyDays: 12 },
      { month: 'March', avgHighF: 39, avgLowF: 22, avgSnowfallInches: 42, snowDays: 16, sunnyDays: 14 },
      { month: 'April', avgHighF: 47, avgLowF: 28, avgSnowfallInches: 24, snowDays: 12, sunnyDays: 15 },
      { month: 'May', avgHighF: 57, avgLowF: 36, avgSnowfallInches: 6, snowDays: 4, sunnyDays: 18 },
      { month: 'June', avgHighF: 68, avgLowF: 43, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 24 },
      { month: 'July', avgHighF: 78, avgLowF: 51, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 27 },
      { month: 'August', avgHighF: 76, avgLowF: 49, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 27 },
      { month: 'September', avgHighF: 66, avgLowF: 41, avgSnowfallInches: 1, snowDays: 1, sunnyDays: 24 },
      { month: 'October', avgHighF: 52, avgLowF: 30, avgSnowfallInches: 8, snowDays: 5, sunnyDays: 20 },
      { month: 'November', avgHighF: 38, avgLowF: 21, avgSnowfallInches: 28, snowDays: 14, sunnyDays: 14 },
      { month: 'December', avgHighF: 30, avgLowF: 15, avgSnowfallInches: 42, snowDays: 18, sunnyDays: 11 },
    ],
  },
  {
    slug: 'sundance',
    monthly: [
      { month: 'January', avgHighF: 34, avgLowF: 16, avgSnowfallInches: 30, snowDays: 15, sunnyDays: 14 },
      { month: 'February', avgHighF: 37, avgLowF: 18, avgSnowfallInches: 26, snowDays: 13, sunnyDays: 14 },
      { month: 'March', avgHighF: 44, avgLowF: 24, avgSnowfallInches: 28, snowDays: 13, sunnyDays: 16 },
      { month: 'April', avgHighF: 53, avgLowF: 31, avgSnowfallInches: 14, snowDays: 8, sunnyDays: 17 },
      { month: 'May', avgHighF: 63, avgLowF: 39, avgSnowfallInches: 2, snowDays: 1, sunnyDays: 20 },
      { month: 'June', avgHighF: 74, avgLowF: 47, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 25 },
      { month: 'July', avgHighF: 84, avgLowF: 55, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 28 },
      { month: 'August', avgHighF: 82, avgLowF: 53, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 28 },
      { month: 'September', avgHighF: 72, avgLowF: 44, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 25 },
      { month: 'October', avgHighF: 58, avgLowF: 33, avgSnowfallInches: 4, snowDays: 3, sunnyDays: 22 },
      { month: 'November', avgHighF: 43, avgLowF: 23, avgSnowfallInches: 18, snowDays: 10, sunnyDays: 16 },
      { month: 'December', avgHighF: 34, avgLowF: 17, avgSnowfallInches: 28, snowDays: 15, sunnyDays: 13 },
    ],
  },

  // ───────────────────────────────────────────────
  // CALIFORNIA
  // ───────────────────────────────────────────────
  {
    slug: 'mammoth-mountain',
    monthly: [
      { month: 'January', avgHighF: 35, avgLowF: 13, avgSnowfallInches: 42, snowDays: 14, sunnyDays: 18 },
      { month: 'February', avgHighF: 35, avgLowF: 13, avgSnowfallInches: 44, snowDays: 14, sunnyDays: 16 },
      { month: 'March', avgHighF: 38, avgLowF: 16, avgSnowfallInches: 48, snowDays: 15, sunnyDays: 18 },
      { month: 'April', avgHighF: 44, avgLowF: 21, avgSnowfallInches: 24, snowDays: 10, sunnyDays: 20 },
      { month: 'May', avgHighF: 52, avgLowF: 28, avgSnowfallInches: 8, snowDays: 4, sunnyDays: 23 },
      { month: 'June', avgHighF: 63, avgLowF: 35, avgSnowfallInches: 1, snowDays: 1, sunnyDays: 27 },
      { month: 'July', avgHighF: 72, avgLowF: 42, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 29 },
      { month: 'August', avgHighF: 71, avgLowF: 41, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 29 },
      { month: 'September', avgHighF: 64, avgLowF: 34, avgSnowfallInches: 1, snowDays: 1, sunnyDays: 27 },
      { month: 'October', avgHighF: 52, avgLowF: 24, avgSnowfallInches: 6, snowDays: 3, sunnyDays: 24 },
      { month: 'November', avgHighF: 42, avgLowF: 18, avgSnowfallInches: 22, snowDays: 9, sunnyDays: 20 },
      { month: 'December', avgHighF: 35, avgLowF: 13, avgSnowfallInches: 38, snowDays: 13, sunnyDays: 18 },
    ],
  },
  {
    slug: 'palisades-tahoe',
    monthly: [
      { month: 'January', avgHighF: 38, avgLowF: 18, avgSnowfallInches: 40, snowDays: 14, sunnyDays: 14 },
      { month: 'February', avgHighF: 38, avgLowF: 18, avgSnowfallInches: 38, snowDays: 13, sunnyDays: 13 },
      { month: 'March', avgHighF: 41, avgLowF: 21, avgSnowfallInches: 44, snowDays: 14, sunnyDays: 15 },
      { month: 'April', avgHighF: 47, avgLowF: 26, avgSnowfallInches: 20, snowDays: 9, sunnyDays: 18 },
      { month: 'May', avgHighF: 55, avgLowF: 32, avgSnowfallInches: 5, snowDays: 3, sunnyDays: 22 },
      { month: 'June', avgHighF: 65, avgLowF: 38, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 27 },
      { month: 'July', avgHighF: 75, avgLowF: 44, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 29 },
      { month: 'August', avgHighF: 74, avgLowF: 43, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 29 },
      { month: 'September', avgHighF: 66, avgLowF: 37, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 27 },
      { month: 'October', avgHighF: 54, avgLowF: 28, avgSnowfallInches: 4, snowDays: 2, sunnyDays: 23 },
      { month: 'November', avgHighF: 43, avgLowF: 22, avgSnowfallInches: 24, snowDays: 10, sunnyDays: 16 },
      { month: 'December', avgHighF: 37, avgLowF: 17, avgSnowfallInches: 38, snowDays: 14, sunnyDays: 13 },
    ],
  },
  {
    slug: 'heavenly',
    monthly: [
      { month: 'January', avgHighF: 39, avgLowF: 18, avgSnowfallInches: 36, snowDays: 13, sunnyDays: 15 },
      { month: 'February', avgHighF: 39, avgLowF: 18, avgSnowfallInches: 34, snowDays: 12, sunnyDays: 14 },
      { month: 'March', avgHighF: 42, avgLowF: 22, avgSnowfallInches: 38, snowDays: 13, sunnyDays: 16 },
      { month: 'April', avgHighF: 48, avgLowF: 27, avgSnowfallInches: 16, snowDays: 8, sunnyDays: 19 },
      { month: 'May', avgHighF: 57, avgLowF: 33, avgSnowfallInches: 3, snowDays: 2, sunnyDays: 23 },
      { month: 'June', avgHighF: 67, avgLowF: 39, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 27 },
      { month: 'July', avgHighF: 76, avgLowF: 45, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 29 },
      { month: 'August', avgHighF: 75, avgLowF: 44, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 29 },
      { month: 'September', avgHighF: 67, avgLowF: 38, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 27 },
      { month: 'October', avgHighF: 55, avgLowF: 29, avgSnowfallInches: 3, snowDays: 2, sunnyDays: 24 },
      { month: 'November', avgHighF: 44, avgLowF: 23, avgSnowfallInches: 20, snowDays: 9, sunnyDays: 17 },
      { month: 'December', avgHighF: 38, avgLowF: 17, avgSnowfallInches: 34, snowDays: 13, sunnyDays: 14 },
    ],
  },
  {
    slug: 'northstar',
    monthly: [
      { month: 'January', avgHighF: 40, avgLowF: 19, avgSnowfallInches: 32, snowDays: 12, sunnyDays: 15 },
      { month: 'February', avgHighF: 40, avgLowF: 19, avgSnowfallInches: 30, snowDays: 11, sunnyDays: 14 },
      { month: 'March', avgHighF: 43, avgLowF: 23, avgSnowfallInches: 34, snowDays: 12, sunnyDays: 16 },
      { month: 'April', avgHighF: 49, avgLowF: 28, avgSnowfallInches: 14, snowDays: 7, sunnyDays: 19 },
      { month: 'May', avgHighF: 58, avgLowF: 34, avgSnowfallInches: 2, snowDays: 1, sunnyDays: 23 },
      { month: 'June', avgHighF: 68, avgLowF: 40, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 27 },
      { month: 'July', avgHighF: 78, avgLowF: 46, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 29 },
      { month: 'August', avgHighF: 77, avgLowF: 45, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 29 },
      { month: 'September', avgHighF: 69, avgLowF: 39, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 27 },
      { month: 'October', avgHighF: 56, avgLowF: 30, avgSnowfallInches: 2, snowDays: 1, sunnyDays: 24 },
      { month: 'November', avgHighF: 45, avgLowF: 24, avgSnowfallInches: 18, snowDays: 8, sunnyDays: 17 },
      { month: 'December', avgHighF: 39, avgLowF: 18, avgSnowfallInches: 30, snowDays: 12, sunnyDays: 14 },
    ],
  },

  // ───────────────────────────────────────────────
  // MONTANA / WYOMING
  // ───────────────────────────────────────────────
  {
    slug: 'big-sky',
    monthly: [
      { month: 'January', avgHighF: 24, avgLowF: 2, avgSnowfallInches: 36, snowDays: 18, sunnyDays: 14 },
      { month: 'February', avgHighF: 28, avgLowF: 4, avgSnowfallInches: 30, snowDays: 16, sunnyDays: 14 },
      { month: 'March', avgHighF: 36, avgLowF: 12, avgSnowfallInches: 34, snowDays: 16, sunnyDays: 16 },
      { month: 'April', avgHighF: 44, avgLowF: 22, avgSnowfallInches: 20, snowDays: 11, sunnyDays: 16 },
      { month: 'May', avgHighF: 54, avgLowF: 30, avgSnowfallInches: 6, snowDays: 4, sunnyDays: 18 },
      { month: 'June', avgHighF: 64, avgLowF: 37, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 22 },
      { month: 'July', avgHighF: 74, avgLowF: 44, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 25 },
      { month: 'August', avgHighF: 73, avgLowF: 42, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 25 },
      { month: 'September', avgHighF: 62, avgLowF: 34, avgSnowfallInches: 2, snowDays: 1, sunnyDays: 22 },
      { month: 'October', avgHighF: 48, avgLowF: 24, avgSnowfallInches: 10, snowDays: 6, sunnyDays: 19 },
      { month: 'November', avgHighF: 32, avgLowF: 12, avgSnowfallInches: 26, snowDays: 14, sunnyDays: 14 },
      { month: 'December', avgHighF: 24, avgLowF: 2, avgSnowfallInches: 34, snowDays: 18, sunnyDays: 12 },
    ],
  },
  {
    slug: 'jackson-hole',
    monthly: [
      { month: 'January', avgHighF: 25, avgLowF: 3, avgSnowfallInches: 42, snowDays: 18, sunnyDays: 14 },
      { month: 'February', avgHighF: 29, avgLowF: 5, avgSnowfallInches: 36, snowDays: 16, sunnyDays: 14 },
      { month: 'March', avgHighF: 37, avgLowF: 13, avgSnowfallInches: 34, snowDays: 15, sunnyDays: 16 },
      { month: 'April', avgHighF: 46, avgLowF: 23, avgSnowfallInches: 16, snowDays: 9, sunnyDays: 17 },
      { month: 'May', avgHighF: 56, avgLowF: 31, avgSnowfallInches: 4, snowDays: 3, sunnyDays: 19 },
      { month: 'June', avgHighF: 66, avgLowF: 38, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 23 },
      { month: 'July', avgHighF: 77, avgLowF: 44, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 26 },
      { month: 'August', avgHighF: 76, avgLowF: 42, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 26 },
      { month: 'September', avgHighF: 64, avgLowF: 33, avgSnowfallInches: 2, snowDays: 1, sunnyDays: 23 },
      { month: 'October', avgHighF: 49, avgLowF: 23, avgSnowfallInches: 10, snowDays: 6, sunnyDays: 20 },
      { month: 'November', avgHighF: 33, avgLowF: 12, avgSnowfallInches: 30, snowDays: 15, sunnyDays: 14 },
      { month: 'December', avgHighF: 24, avgLowF: 2, avgSnowfallInches: 40, snowDays: 18, sunnyDays: 12 },
    ],
  },

  // ───────────────────────────────────────────────
  // VERMONT
  // ───────────────────────────────────────────────
  {
    slug: 'stowe',
    monthly: [
      { month: 'January', avgHighF: 25, avgLowF: 5, avgSnowfallInches: 28, snowDays: 16, sunnyDays: 10 },
      { month: 'February', avgHighF: 28, avgLowF: 7, avgSnowfallInches: 24, snowDays: 14, sunnyDays: 10 },
      { month: 'March', avgHighF: 37, avgLowF: 17, avgSnowfallInches: 22, snowDays: 13, sunnyDays: 12 },
      { month: 'April', avgHighF: 49, avgLowF: 30, avgSnowfallInches: 8, snowDays: 6, sunnyDays: 13 },
      { month: 'May', avgHighF: 62, avgLowF: 40, avgSnowfallInches: 1, snowDays: 1, sunnyDays: 16 },
      { month: 'June', avgHighF: 72, avgLowF: 50, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 19 },
      { month: 'July', avgHighF: 77, avgLowF: 56, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 21 },
      { month: 'August', avgHighF: 75, avgLowF: 54, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 20 },
      { month: 'September', avgHighF: 66, avgLowF: 45, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 17 },
      { month: 'October', avgHighF: 52, avgLowF: 34, avgSnowfallInches: 2, snowDays: 2, sunnyDays: 15 },
      { month: 'November', avgHighF: 39, avgLowF: 24, avgSnowfallInches: 14, snowDays: 9, sunnyDays: 10 },
      { month: 'December', avgHighF: 28, avgLowF: 10, avgSnowfallInches: 26, snowDays: 15, sunnyDays: 9 },
    ],
  },
  {
    slug: 'killington',
    monthly: [
      { month: 'January', avgHighF: 26, avgLowF: 6, avgSnowfallInches: 24, snowDays: 15, sunnyDays: 10 },
      { month: 'February', avgHighF: 29, avgLowF: 8, avgSnowfallInches: 22, snowDays: 13, sunnyDays: 10 },
      { month: 'March', avgHighF: 37, avgLowF: 18, avgSnowfallInches: 20, snowDays: 12, sunnyDays: 12 },
      { month: 'April', avgHighF: 49, avgLowF: 30, avgSnowfallInches: 8, snowDays: 6, sunnyDays: 13 },
      { month: 'May', avgHighF: 62, avgLowF: 40, avgSnowfallInches: 1, snowDays: 1, sunnyDays: 16 },
      { month: 'June', avgHighF: 72, avgLowF: 50, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 19 },
      { month: 'July', avgHighF: 77, avgLowF: 55, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 21 },
      { month: 'August', avgHighF: 75, avgLowF: 53, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 20 },
      { month: 'September', avgHighF: 66, avgLowF: 44, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 17 },
      { month: 'October', avgHighF: 52, avgLowF: 34, avgSnowfallInches: 2, snowDays: 2, sunnyDays: 15 },
      { month: 'November', avgHighF: 40, avgLowF: 25, avgSnowfallInches: 12, snowDays: 8, sunnyDays: 10 },
      { month: 'December', avgHighF: 29, avgLowF: 11, avgSnowfallInches: 22, snowDays: 14, sunnyDays: 9 },
    ],
  },

  // ───────────────────────────────────────────────
  // MAINE
  // ───────────────────────────────────────────────
  {
    slug: 'sunday-river',
    monthly: [
      { month: 'January', avgHighF: 24, avgLowF: 2, avgSnowfallInches: 22, snowDays: 14, sunnyDays: 11 },
      { month: 'February', avgHighF: 27, avgLowF: 4, avgSnowfallInches: 20, snowDays: 12, sunnyDays: 11 },
      { month: 'March', avgHighF: 36, avgLowF: 15, avgSnowfallInches: 18, snowDays: 11, sunnyDays: 13 },
      { month: 'April', avgHighF: 48, avgLowF: 28, avgSnowfallInches: 6, snowDays: 5, sunnyDays: 14 },
      { month: 'May', avgHighF: 61, avgLowF: 38, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 17 },
      { month: 'June', avgHighF: 71, avgLowF: 48, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 19 },
      { month: 'July', avgHighF: 77, avgLowF: 54, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 21 },
      { month: 'August', avgHighF: 75, avgLowF: 52, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 20 },
      { month: 'September', avgHighF: 66, avgLowF: 43, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 17 },
      { month: 'October', avgHighF: 52, avgLowF: 32, avgSnowfallInches: 1, snowDays: 1, sunnyDays: 15 },
      { month: 'November', avgHighF: 39, avgLowF: 22, avgSnowfallInches: 10, snowDays: 7, sunnyDays: 10 },
      { month: 'December', avgHighF: 27, avgLowF: 7, avgSnowfallInches: 20, snowDays: 13, sunnyDays: 10 },
    ],
  },
  {
    slug: 'sugarbush',
    monthly: [
      { month: 'January', avgHighF: 25, avgLowF: 4, avgSnowfallInches: 26, snowDays: 15, sunnyDays: 10 },
      { month: 'February', avgHighF: 28, avgLowF: 6, avgSnowfallInches: 22, snowDays: 13, sunnyDays: 10 },
      { month: 'March', avgHighF: 37, avgLowF: 16, avgSnowfallInches: 20, snowDays: 12, sunnyDays: 12 },
      { month: 'April', avgHighF: 49, avgLowF: 29, avgSnowfallInches: 7, snowDays: 5, sunnyDays: 13 },
      { month: 'May', avgHighF: 62, avgLowF: 39, avgSnowfallInches: 1, snowDays: 1, sunnyDays: 16 },
      { month: 'June', avgHighF: 72, avgLowF: 49, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 19 },
      { month: 'July', avgHighF: 77, avgLowF: 55, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 21 },
      { month: 'August', avgHighF: 75, avgLowF: 53, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 20 },
      { month: 'September', avgHighF: 66, avgLowF: 44, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 17 },
      { month: 'October', avgHighF: 52, avgLowF: 33, avgSnowfallInches: 2, snowDays: 2, sunnyDays: 15 },
      { month: 'November', avgHighF: 39, avgLowF: 23, avgSnowfallInches: 14, snowDays: 9, sunnyDays: 10 },
      { month: 'December', avgHighF: 28, avgLowF: 9, avgSnowfallInches: 24, snowDays: 15, sunnyDays: 9 },
    ],
  },
  {
    slug: 'jay-peak',
    monthly: [
      { month: 'January', avgHighF: 22, avgLowF: 1, avgSnowfallInches: 36, snowDays: 18, sunnyDays: 8 },
      { month: 'February', avgHighF: 25, avgLowF: 3, avgSnowfallInches: 32, snowDays: 16, sunnyDays: 8 },
      { month: 'March', avgHighF: 34, avgLowF: 14, avgSnowfallInches: 30, snowDays: 15, sunnyDays: 10 },
      { month: 'April', avgHighF: 46, avgLowF: 27, avgSnowfallInches: 12, snowDays: 8, sunnyDays: 12 },
      { month: 'May', avgHighF: 60, avgLowF: 38, avgSnowfallInches: 1, snowDays: 1, sunnyDays: 15 },
      { month: 'June', avgHighF: 70, avgLowF: 48, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 18 },
      { month: 'July', avgHighF: 75, avgLowF: 54, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 20 },
      { month: 'August', avgHighF: 73, avgLowF: 52, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 19 },
      { month: 'September', avgHighF: 64, avgLowF: 43, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 16 },
      { month: 'October', avgHighF: 50, avgLowF: 32, avgSnowfallInches: 3, snowDays: 3, sunnyDays: 14 },
      { month: 'November', avgHighF: 37, avgLowF: 22, avgSnowfallInches: 20, snowDays: 12, sunnyDays: 8 },
      { month: 'December', avgHighF: 25, avgLowF: 7, avgSnowfallInches: 34, snowDays: 18, sunnyDays: 7 },
    ],
  },

  // ───────────────────────────────────────────────
  // CANADA
  // ───────────────────────────────────────────────
  {
    slug: 'whistler-blackcomb',
    monthly: [
      { month: 'January', avgHighF: 31, avgLowF: 20, avgSnowfallInches: 50, snowDays: 20, sunnyDays: 6 },
      { month: 'February', avgHighF: 33, avgLowF: 22, avgSnowfallInches: 40, snowDays: 17, sunnyDays: 7 },
      { month: 'March', avgHighF: 37, avgLowF: 24, avgSnowfallInches: 36, snowDays: 16, sunnyDays: 10 },
      { month: 'April', avgHighF: 44, avgLowF: 29, avgSnowfallInches: 16, snowDays: 10, sunnyDays: 13 },
      { month: 'May', avgHighF: 53, avgLowF: 36, avgSnowfallInches: 2, snowDays: 2, sunnyDays: 16 },
      { month: 'June', avgHighF: 60, avgLowF: 43, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 18 },
      { month: 'July', avgHighF: 68, avgLowF: 49, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 22 },
      { month: 'August', avgHighF: 68, avgLowF: 49, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 21 },
      { month: 'September', avgHighF: 59, avgLowF: 42, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 18 },
      { month: 'October', avgHighF: 46, avgLowF: 33, avgSnowfallInches: 6, snowDays: 4, sunnyDays: 13 },
      { month: 'November', avgHighF: 35, avgLowF: 25, avgSnowfallInches: 34, snowDays: 16, sunnyDays: 7 },
      { month: 'December', avgHighF: 30, avgLowF: 21, avgSnowfallInches: 48, snowDays: 20, sunnyDays: 5 },
    ],
  },
  {
    slug: 'banff-sunshine',
    monthly: [
      { month: 'January', avgHighF: 21, avgLowF: 0, avgSnowfallInches: 30, snowDays: 17, sunnyDays: 13 },
      { month: 'February', avgHighF: 25, avgLowF: 3, avgSnowfallInches: 24, snowDays: 14, sunnyDays: 13 },
      { month: 'March', avgHighF: 32, avgLowF: 10, avgSnowfallInches: 26, snowDays: 14, sunnyDays: 15 },
      { month: 'April', avgHighF: 41, avgLowF: 20, avgSnowfallInches: 16, snowDays: 10, sunnyDays: 15 },
      { month: 'May', avgHighF: 52, avgLowF: 30, avgSnowfallInches: 6, snowDays: 4, sunnyDays: 17 },
      { month: 'June', avgHighF: 61, avgLowF: 37, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 20 },
      { month: 'July', avgHighF: 70, avgLowF: 43, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 23 },
      { month: 'August', avgHighF: 69, avgLowF: 42, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 22 },
      { month: 'September', avgHighF: 58, avgLowF: 33, avgSnowfallInches: 3, snowDays: 2, sunnyDays: 19 },
      { month: 'October', avgHighF: 44, avgLowF: 23, avgSnowfallInches: 12, snowDays: 7, sunnyDays: 16 },
      { month: 'November', avgHighF: 29, avgLowF: 10, avgSnowfallInches: 24, snowDays: 14, sunnyDays: 12 },
      { month: 'December', avgHighF: 21, avgLowF: 1, avgSnowfallInches: 28, snowDays: 16, sunnyDays: 12 },
    ],
  },
  {
    slug: 'lake-louise',
    monthly: [
      { month: 'January', avgHighF: 17, avgLowF: -5, avgSnowfallInches: 26, snowDays: 16, sunnyDays: 14 },
      { month: 'February', avgHighF: 22, avgLowF: -1, avgSnowfallInches: 22, snowDays: 13, sunnyDays: 14 },
      { month: 'March', avgHighF: 30, avgLowF: 7, avgSnowfallInches: 22, snowDays: 13, sunnyDays: 16 },
      { month: 'April', avgHighF: 39, avgLowF: 18, avgSnowfallInches: 14, snowDays: 9, sunnyDays: 16 },
      { month: 'May', avgHighF: 50, avgLowF: 28, avgSnowfallInches: 6, snowDays: 4, sunnyDays: 17 },
      { month: 'June', avgHighF: 59, avgLowF: 35, avgSnowfallInches: 1, snowDays: 1, sunnyDays: 19 },
      { month: 'July', avgHighF: 67, avgLowF: 41, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 22 },
      { month: 'August', avgHighF: 66, avgLowF: 40, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 22 },
      { month: 'September', avgHighF: 55, avgLowF: 31, avgSnowfallInches: 4, snowDays: 3, sunnyDays: 19 },
      { month: 'October', avgHighF: 42, avgLowF: 21, avgSnowfallInches: 12, snowDays: 7, sunnyDays: 17 },
      { month: 'November', avgHighF: 26, avgLowF: 7, avgSnowfallInches: 22, snowDays: 13, sunnyDays: 13 },
      { month: 'December', avgHighF: 18, avgLowF: -3, avgSnowfallInches: 24, snowDays: 15, sunnyDays: 13 },
    ],
  },
  {
    slug: 'mont-tremblant',
    monthly: [
      { month: 'January', avgHighF: 16, avgLowF: -4, avgSnowfallInches: 26, snowDays: 16, sunnyDays: 10 },
      { month: 'February', avgHighF: 20, avgLowF: -1, avgSnowfallInches: 22, snowDays: 14, sunnyDays: 10 },
      { month: 'March', avgHighF: 31, avgLowF: 11, avgSnowfallInches: 20, snowDays: 12, sunnyDays: 12 },
      { month: 'April', avgHighF: 46, avgLowF: 27, avgSnowfallInches: 6, snowDays: 5, sunnyDays: 13 },
      { month: 'May', avgHighF: 61, avgLowF: 38, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 16 },
      { month: 'June', avgHighF: 71, avgLowF: 49, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 19 },
      { month: 'July', avgHighF: 76, avgLowF: 54, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 21 },
      { month: 'August', avgHighF: 74, avgLowF: 52, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 20 },
      { month: 'September', avgHighF: 64, avgLowF: 43, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 17 },
      { month: 'October', avgHighF: 49, avgLowF: 31, avgSnowfallInches: 2, snowDays: 2, sunnyDays: 14 },
      { month: 'November', avgHighF: 35, avgLowF: 20, avgSnowfallInches: 16, snowDays: 10, sunnyDays: 9 },
      { month: 'December', avgHighF: 20, avgLowF: 2, avgSnowfallInches: 26, snowDays: 16, sunnyDays: 8 },
    ],
  },
  {
    slug: 'sun-peaks',
    monthly: [
      { month: 'January', avgHighF: 23, avgLowF: 6, avgSnowfallInches: 38, snowDays: 18, sunnyDays: 8 },
      { month: 'February', avgHighF: 28, avgLowF: 9, avgSnowfallInches: 30, snowDays: 15, sunnyDays: 9 },
      { month: 'March', avgHighF: 36, avgLowF: 16, avgSnowfallInches: 24, snowDays: 13, sunnyDays: 12 },
      { month: 'April', avgHighF: 47, avgLowF: 26, avgSnowfallInches: 10, snowDays: 7, sunnyDays: 15 },
      { month: 'May', avgHighF: 58, avgLowF: 34, avgSnowfallInches: 1, snowDays: 1, sunnyDays: 17 },
      { month: 'June', avgHighF: 66, avgLowF: 42, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 19 },
      { month: 'July', avgHighF: 75, avgLowF: 48, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 23 },
      { month: 'August', avgHighF: 74, avgLowF: 47, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 22 },
      { month: 'September', avgHighF: 62, avgLowF: 38, avgSnowfallInches: 1, snowDays: 1, sunnyDays: 18 },
      { month: 'October', avgHighF: 47, avgLowF: 28, avgSnowfallInches: 8, snowDays: 5, sunnyDays: 14 },
      { month: 'November', avgHighF: 31, avgLowF: 15, avgSnowfallInches: 28, snowDays: 15, sunnyDays: 8 },
      { month: 'December', avgHighF: 23, avgLowF: 7, avgSnowfallInches: 36, snowDays: 18, sunnyDays: 6 },
    ],
  },

  // ───────────────────────────────────────────────
  // COLORADO (additional)
  // ───────────────────────────────────────────────
  {
    slug: 'arapahoe-basin',
    monthly: [
      { month: 'January', avgHighF: 22, avgLowF: -2, avgSnowfallInches: 46, snowDays: 21, sunnyDays: 18 },
      { month: 'February', avgHighF: 24, avgLowF: 0, avgSnowfallInches: 40, snowDays: 19, sunnyDays: 17 },
      { month: 'March', avgHighF: 30, avgLowF: 6, avgSnowfallInches: 50, snowDays: 20, sunnyDays: 18 },
      { month: 'April', avgHighF: 38, avgLowF: 15, avgSnowfallInches: 42, snowDays: 17, sunnyDays: 17 },
      { month: 'May', avgHighF: 47, avgLowF: 24, avgSnowfallInches: 24, snowDays: 11, sunnyDays: 19 },
      { month: 'June', avgHighF: 57, avgLowF: 32, avgSnowfallInches: 4, snowDays: 2, sunnyDays: 23 },
      { month: 'July', avgHighF: 64, avgLowF: 38, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 24 },
      { month: 'August', avgHighF: 62, avgLowF: 37, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 24 },
      { month: 'September', avgHighF: 55, avgLowF: 29, avgSnowfallInches: 10, snowDays: 5, sunnyDays: 22 },
      { month: 'October', avgHighF: 43, avgLowF: 18, avgSnowfallInches: 26, snowDays: 13, sunnyDays: 20 },
      { month: 'November', avgHighF: 30, avgLowF: 6, avgSnowfallInches: 42, snowDays: 19, sunnyDays: 17 },
      { month: 'December', avgHighF: 22, avgLowF: -2, avgSnowfallInches: 46, snowDays: 21, sunnyDays: 17 },
    ],
  },
  {
    slug: 'crested-butte',
    monthly: [
      { month: 'January', avgHighF: 26, avgLowF: -2, avgSnowfallInches: 42, snowDays: 18, sunnyDays: 16 },
      { month: 'February', avgHighF: 30, avgLowF: 1, avgSnowfallInches: 36, snowDays: 16, sunnyDays: 16 },
      { month: 'March', avgHighF: 37, avgLowF: 9, avgSnowfallInches: 40, snowDays: 17, sunnyDays: 18 },
      { month: 'April', avgHighF: 46, avgLowF: 19, avgSnowfallInches: 24, snowDays: 12, sunnyDays: 18 },
      { month: 'May', avgHighF: 57, avgLowF: 28, avgSnowfallInches: 8, snowDays: 5, sunnyDays: 20 },
      { month: 'June', avgHighF: 68, avgLowF: 35, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 24 },
      { month: 'July', avgHighF: 75, avgLowF: 42, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 25 },
      { month: 'August', avgHighF: 73, avgLowF: 40, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 25 },
      { month: 'September', avgHighF: 64, avgLowF: 32, avgSnowfallInches: 4, snowDays: 2, sunnyDays: 23 },
      { month: 'October', avgHighF: 51, avgLowF: 21, avgSnowfallInches: 14, snowDays: 7, sunnyDays: 21 },
      { month: 'November', avgHighF: 35, avgLowF: 8, avgSnowfallInches: 34, snowDays: 15, sunnyDays: 17 },
      { month: 'December', avgHighF: 26, avgLowF: -1, avgSnowfallInches: 40, snowDays: 18, sunnyDays: 15 },
    ],
  },

  // ───────────────────────────────────────────────
  // UTAH (additional)
  // ───────────────────────────────────────────────
  {
    slug: 'snowbasin',
    monthly: [
      { month: 'January', avgHighF: 30, avgLowF: 12, avgSnowfallInches: 44, snowDays: 18, sunnyDays: 13 },
      { month: 'February', avgHighF: 33, avgLowF: 14, avgSnowfallInches: 38, snowDays: 16, sunnyDays: 13 },
      { month: 'March', avgHighF: 40, avgLowF: 20, avgSnowfallInches: 42, snowDays: 16, sunnyDays: 15 },
      { month: 'April', avgHighF: 48, avgLowF: 27, avgSnowfallInches: 24, snowDays: 12, sunnyDays: 16 },
      { month: 'May', avgHighF: 59, avgLowF: 35, avgSnowfallInches: 6, snowDays: 4, sunnyDays: 19 },
      { month: 'June', avgHighF: 70, avgLowF: 42, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 25 },
      { month: 'July', avgHighF: 80, avgLowF: 50, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 27 },
      { month: 'August', avgHighF: 78, avgLowF: 48, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 27 },
      { month: 'September', avgHighF: 68, avgLowF: 39, avgSnowfallInches: 1, snowDays: 1, sunnyDays: 25 },
      { month: 'October', avgHighF: 54, avgLowF: 28, avgSnowfallInches: 8, snowDays: 5, sunnyDays: 21 },
      { month: 'November', avgHighF: 39, avgLowF: 19, avgSnowfallInches: 30, snowDays: 14, sunnyDays: 15 },
      { month: 'December', avgHighF: 30, avgLowF: 13, avgSnowfallInches: 42, snowDays: 18, sunnyDays: 12 },
    ],
  },

  // ───────────────────────────────────────────────
  // CALIFORNIA (additional)
  // ───────────────────────────────────────────────
  {
    slug: 'kirkwood',
    monthly: [
      { month: 'January', avgHighF: 36, avgLowF: 16, avgSnowfallInches: 66, snowDays: 17, sunnyDays: 14 },
      { month: 'February', avgHighF: 36, avgLowF: 16, avgSnowfallInches: 62, snowDays: 16, sunnyDays: 13 },
      { month: 'March', avgHighF: 39, avgLowF: 19, avgSnowfallInches: 68, snowDays: 17, sunnyDays: 15 },
      { month: 'April', avgHighF: 45, avgLowF: 24, avgSnowfallInches: 36, snowDays: 12, sunnyDays: 18 },
      { month: 'May', avgHighF: 53, avgLowF: 30, avgSnowfallInches: 12, snowDays: 5, sunnyDays: 22 },
      { month: 'June', avgHighF: 63, avgLowF: 36, avgSnowfallInches: 1, snowDays: 1, sunnyDays: 27 },
      { month: 'July', avgHighF: 73, avgLowF: 42, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 29 },
      { month: 'August', avgHighF: 72, avgLowF: 41, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 29 },
      { month: 'September', avgHighF: 64, avgLowF: 35, avgSnowfallInches: 1, snowDays: 1, sunnyDays: 27 },
      { month: 'October', avgHighF: 52, avgLowF: 26, avgSnowfallInches: 10, snowDays: 4, sunnyDays: 23 },
      { month: 'November', avgHighF: 42, avgLowF: 20, avgSnowfallInches: 40, snowDays: 13, sunnyDays: 16 },
      { month: 'December', avgHighF: 36, avgLowF: 15, avgSnowfallInches: 60, snowDays: 17, sunnyDays: 13 },
    ],
  },
  {
    slug: 'sugar-bowl',
    monthly: [
      { month: 'January', avgHighF: 38, avgLowF: 20, avgSnowfallInches: 68, snowDays: 18, sunnyDays: 13 },
      { month: 'February', avgHighF: 38, avgLowF: 20, avgSnowfallInches: 60, snowDays: 16, sunnyDays: 12 },
      { month: 'March', avgHighF: 40, avgLowF: 22, avgSnowfallInches: 66, snowDays: 17, sunnyDays: 14 },
      { month: 'April', avgHighF: 46, avgLowF: 27, avgSnowfallInches: 32, snowDays: 12, sunnyDays: 17 },
      { month: 'May', avgHighF: 54, avgLowF: 33, avgSnowfallInches: 10, snowDays: 4, sunnyDays: 22 },
      { month: 'June', avgHighF: 64, avgLowF: 39, avgSnowfallInches: 1, snowDays: 1, sunnyDays: 27 },
      { month: 'July', avgHighF: 74, avgLowF: 45, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 29 },
      { month: 'August', avgHighF: 73, avgLowF: 44, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 29 },
      { month: 'September', avgHighF: 65, avgLowF: 38, avgSnowfallInches: 1, snowDays: 1, sunnyDays: 27 },
      { month: 'October', avgHighF: 53, avgLowF: 29, avgSnowfallInches: 8, snowDays: 4, sunnyDays: 23 },
      { month: 'November', avgHighF: 43, avgLowF: 24, avgSnowfallInches: 42, snowDays: 14, sunnyDays: 15 },
      { month: 'December', avgHighF: 37, avgLowF: 19, avgSnowfallInches: 62, snowDays: 17, sunnyDays: 12 },
    ],
  },

  // ───────────────────────────────────────────────
  // MONTANA / WYOMING / IDAHO (additional)
  // ───────────────────────────────────────────────
  {
    slug: 'whitefish',
    monthly: [
      { month: 'January', avgHighF: 27, avgLowF: 12, avgSnowfallInches: 50, snowDays: 20, sunnyDays: 8 },
      { month: 'February', avgHighF: 31, avgLowF: 14, avgSnowfallInches: 42, snowDays: 17, sunnyDays: 9 },
      { month: 'March', avgHighF: 38, avgLowF: 20, avgSnowfallInches: 38, snowDays: 16, sunnyDays: 12 },
      { month: 'April', avgHighF: 48, avgLowF: 28, avgSnowfallInches: 18, snowDays: 10, sunnyDays: 14 },
      { month: 'May', avgHighF: 59, avgLowF: 36, avgSnowfallInches: 2, snowDays: 1, sunnyDays: 17 },
      { month: 'June', avgHighF: 68, avgLowF: 43, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 20 },
      { month: 'July', avgHighF: 78, avgLowF: 49, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 24 },
      { month: 'August', avgHighF: 77, avgLowF: 48, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 24 },
      { month: 'September', avgHighF: 64, avgLowF: 39, avgSnowfallInches: 1, snowDays: 1, sunnyDays: 19 },
      { month: 'October', avgHighF: 48, avgLowF: 29, avgSnowfallInches: 10, snowDays: 5, sunnyDays: 15 },
      { month: 'November', avgHighF: 34, avgLowF: 20, avgSnowfallInches: 38, snowDays: 17, sunnyDays: 8 },
      { month: 'December', avgHighF: 27, avgLowF: 13, avgSnowfallInches: 48, snowDays: 20, sunnyDays: 6 },
    ],
  },
  {
    slug: 'grand-targhee',
    monthly: [
      { month: 'January', avgHighF: 22, avgLowF: 0, avgSnowfallInches: 72, snowDays: 23, sunnyDays: 11 },
      { month: 'February', avgHighF: 25, avgLowF: 2, avgSnowfallInches: 62, snowDays: 20, sunnyDays: 11 },
      { month: 'March', avgHighF: 32, avgLowF: 9, avgSnowfallInches: 64, snowDays: 20, sunnyDays: 13 },
      { month: 'April', avgHighF: 41, avgLowF: 19, avgSnowfallInches: 36, snowDays: 14, sunnyDays: 14 },
      { month: 'May', avgHighF: 51, avgLowF: 28, avgSnowfallInches: 12, snowDays: 6, sunnyDays: 17 },
      { month: 'June', avgHighF: 62, avgLowF: 35, avgSnowfallInches: 1, snowDays: 1, sunnyDays: 22 },
      { month: 'July', avgHighF: 72, avgLowF: 42, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 25 },
      { month: 'August', avgHighF: 71, avgLowF: 40, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 25 },
      { month: 'September', avgHighF: 60, avgLowF: 32, avgSnowfallInches: 4, snowDays: 2, sunnyDays: 21 },
      { month: 'October', avgHighF: 46, avgLowF: 22, avgSnowfallInches: 20, snowDays: 10, sunnyDays: 17 },
      { month: 'November', avgHighF: 30, avgLowF: 9, avgSnowfallInches: 50, snowDays: 19, sunnyDays: 11 },
      { month: 'December', avgHighF: 22, avgLowF: 1, avgSnowfallInches: 68, snowDays: 23, sunnyDays: 9 },
    ],
  },
  {
    slug: 'sun-valley',
    monthly: [
      { month: 'January', avgHighF: 28, avgLowF: 5, avgSnowfallInches: 30, snowDays: 14, sunnyDays: 16 },
      { month: 'February', avgHighF: 32, avgLowF: 8, avgSnowfallInches: 26, snowDays: 12, sunnyDays: 16 },
      { month: 'March', avgHighF: 39, avgLowF: 15, avgSnowfallInches: 28, snowDays: 13, sunnyDays: 18 },
      { month: 'April', avgHighF: 48, avgLowF: 24, avgSnowfallInches: 16, snowDays: 8, sunnyDays: 19 },
      { month: 'May', avgHighF: 58, avgLowF: 32, avgSnowfallInches: 4, snowDays: 2, sunnyDays: 22 },
      { month: 'June', avgHighF: 68, avgLowF: 39, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 25 },
      { month: 'July', avgHighF: 79, avgLowF: 45, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 28 },
      { month: 'August', avgHighF: 78, avgLowF: 43, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 28 },
      { month: 'September', avgHighF: 66, avgLowF: 35, avgSnowfallInches: 1, snowDays: 1, sunnyDays: 25 },
      { month: 'October', avgHighF: 52, avgLowF: 25, avgSnowfallInches: 6, snowDays: 4, sunnyDays: 21 },
      { month: 'November', avgHighF: 36, avgLowF: 14, avgSnowfallInches: 20, snowDays: 11, sunnyDays: 16 },
      { month: 'December', avgHighF: 28, avgLowF: 6, avgSnowfallInches: 28, snowDays: 14, sunnyDays: 15 },
    ],
  },

  // ───────────────────────────────────────────────
  // NORTHEAST (additional)
  // ───────────────────────────────────────────────
  {
    slug: 'sugarloaf',
    monthly: [
      { month: 'January', avgHighF: 19, avgLowF: -5, avgSnowfallInches: 32, snowDays: 17, sunnyDays: 10 },
      { month: 'February', avgHighF: 22, avgLowF: -3, avgSnowfallInches: 28, snowDays: 15, sunnyDays: 10 },
      { month: 'March', avgHighF: 32, avgLowF: 8, avgSnowfallInches: 26, snowDays: 14, sunnyDays: 12 },
      { month: 'April', avgHighF: 44, avgLowF: 23, avgSnowfallInches: 12, snowDays: 8, sunnyDays: 13 },
      { month: 'May', avgHighF: 58, avgLowF: 34, avgSnowfallInches: 2, snowDays: 1, sunnyDays: 16 },
      { month: 'June', avgHighF: 68, avgLowF: 44, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 18 },
      { month: 'July', avgHighF: 74, avgLowF: 50, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 20 },
      { month: 'August', avgHighF: 72, avgLowF: 48, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 19 },
      { month: 'September', avgHighF: 63, avgLowF: 40, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 16 },
      { month: 'October', avgHighF: 49, avgLowF: 28, avgSnowfallInches: 4, snowDays: 3, sunnyDays: 14 },
      { month: 'November', avgHighF: 36, avgLowF: 17, avgSnowfallInches: 18, snowDays: 11, sunnyDays: 9 },
      { month: 'December', avgHighF: 23, avgLowF: 2, avgSnowfallInches: 28, snowDays: 16, sunnyDays: 9 },
    ],
  },
  {
    slug: 'bretton-woods',
    monthly: [
      { month: 'January', avgHighF: 22, avgLowF: 0, avgSnowfallInches: 30, snowDays: 16, sunnyDays: 10 },
      { month: 'February', avgHighF: 25, avgLowF: 2, avgSnowfallInches: 26, snowDays: 15, sunnyDays: 10 },
      { month: 'March', avgHighF: 34, avgLowF: 12, avgSnowfallInches: 26, snowDays: 14, sunnyDays: 12 },
      { month: 'April', avgHighF: 46, avgLowF: 26, avgSnowfallInches: 10, snowDays: 7, sunnyDays: 13 },
      { month: 'May', avgHighF: 60, avgLowF: 36, avgSnowfallInches: 1, snowDays: 1, sunnyDays: 16 },
      { month: 'June', avgHighF: 70, avgLowF: 46, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 18 },
      { month: 'July', avgHighF: 76, avgLowF: 52, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 20 },
      { month: 'August', avgHighF: 74, avgLowF: 50, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 19 },
      { month: 'September', avgHighF: 64, avgLowF: 42, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 16 },
      { month: 'October', avgHighF: 50, avgLowF: 30, avgSnowfallInches: 3, snowDays: 2, sunnyDays: 14 },
      { month: 'November', avgHighF: 37, avgLowF: 20, avgSnowfallInches: 20, snowDays: 12, sunnyDays: 9 },
      { month: 'December', avgHighF: 26, avgLowF: 5, avgSnowfallInches: 28, snowDays: 16, sunnyDays: 9 },
    ],
  },
  {
    slug: 'loon-mountain',
    monthly: [
      { month: 'January', avgHighF: 25, avgLowF: 4, avgSnowfallInches: 22, snowDays: 14, sunnyDays: 10 },
      { month: 'February', avgHighF: 28, avgLowF: 6, avgSnowfallInches: 20, snowDays: 12, sunnyDays: 10 },
      { month: 'March', avgHighF: 36, avgLowF: 16, avgSnowfallInches: 20, snowDays: 12, sunnyDays: 12 },
      { month: 'April', avgHighF: 48, avgLowF: 28, avgSnowfallInches: 8, snowDays: 6, sunnyDays: 13 },
      { month: 'May', avgHighF: 61, avgLowF: 38, avgSnowfallInches: 1, snowDays: 1, sunnyDays: 16 },
      { month: 'June', avgHighF: 71, avgLowF: 48, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 19 },
      { month: 'July', avgHighF: 77, avgLowF: 54, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 21 },
      { month: 'August', avgHighF: 75, avgLowF: 52, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 20 },
      { month: 'September', avgHighF: 66, avgLowF: 43, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 17 },
      { month: 'October', avgHighF: 52, avgLowF: 32, avgSnowfallInches: 2, snowDays: 1, sunnyDays: 15 },
      { month: 'November', avgHighF: 39, avgLowF: 22, avgSnowfallInches: 12, snowDays: 8, sunnyDays: 10 },
      { month: 'December', avgHighF: 28, avgLowF: 9, avgSnowfallInches: 22, snowDays: 14, sunnyDays: 9 },
    ],
  },

  // ───────────────────────────────────────────────
  // PACIFIC NORTHWEST
  // ───────────────────────────────────────────────
  {
    slug: 'mt-bachelor',
    monthly: [
      { month: 'January', avgHighF: 30, avgLowF: 14, avgSnowfallInches: 64, snowDays: 21, sunnyDays: 10 },
      { month: 'February', avgHighF: 32, avgLowF: 15, avgSnowfallInches: 56, snowDays: 19, sunnyDays: 10 },
      { month: 'March', avgHighF: 35, avgLowF: 18, avgSnowfallInches: 58, snowDays: 19, sunnyDays: 13 },
      { month: 'April', avgHighF: 42, avgLowF: 23, avgSnowfallInches: 34, snowDays: 14, sunnyDays: 15 },
      { month: 'May', avgHighF: 50, avgLowF: 29, avgSnowfallInches: 12, snowDays: 6, sunnyDays: 18 },
      { month: 'June', avgHighF: 59, avgLowF: 35, avgSnowfallInches: 1, snowDays: 1, sunnyDays: 22 },
      { month: 'July', avgHighF: 70, avgLowF: 42, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 27 },
      { month: 'August', avgHighF: 70, avgLowF: 41, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 27 },
      { month: 'September', avgHighF: 62, avgLowF: 35, avgSnowfallInches: 1, snowDays: 1, sunnyDays: 24 },
      { month: 'October', avgHighF: 49, avgLowF: 26, avgSnowfallInches: 12, snowDays: 6, sunnyDays: 18 },
      { month: 'November', avgHighF: 36, avgLowF: 19, avgSnowfallInches: 44, snowDays: 17, sunnyDays: 9 },
      { month: 'December', avgHighF: 30, avgLowF: 14, avgSnowfallInches: 58, snowDays: 21, sunnyDays: 8 },
    ],
  },
  {
    slug: 'crystal-mountain',
    monthly: [
      { month: 'January', avgHighF: 32, avgLowF: 22, avgSnowfallInches: 70, snowDays: 22, sunnyDays: 5 },
      { month: 'February', avgHighF: 34, avgLowF: 23, avgSnowfallInches: 58, snowDays: 19, sunnyDays: 6 },
      { month: 'March', avgHighF: 37, avgLowF: 25, avgSnowfallInches: 56, snowDays: 18, sunnyDays: 8 },
      { month: 'April', avgHighF: 43, avgLowF: 29, avgSnowfallInches: 30, snowDays: 13, sunnyDays: 11 },
      { month: 'May', avgHighF: 51, avgLowF: 34, avgSnowfallInches: 8, snowDays: 5, sunnyDays: 15 },
      { month: 'June', avgHighF: 58, avgLowF: 40, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 18 },
      { month: 'July', avgHighF: 67, avgLowF: 46, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 23 },
      { month: 'August', avgHighF: 67, avgLowF: 46, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 22 },
      { month: 'September', avgHighF: 59, avgLowF: 40, avgSnowfallInches: 1, snowDays: 1, sunnyDays: 18 },
      { month: 'October', avgHighF: 47, avgLowF: 32, avgSnowfallInches: 12, snowDays: 6, sunnyDays: 12 },
      { month: 'November', avgHighF: 36, avgLowF: 26, avgSnowfallInches: 50, snowDays: 19, sunnyDays: 5 },
      { month: 'December', avgHighF: 31, avgLowF: 22, avgSnowfallInches: 66, snowDays: 22, sunnyDays: 4 },
    ],
  },
  {
    slug: 'stevens-pass',
    monthly: [
      { month: 'January', avgHighF: 33, avgLowF: 23, avgSnowfallInches: 66, snowDays: 22, sunnyDays: 5 },
      { month: 'February', avgHighF: 35, avgLowF: 24, avgSnowfallInches: 56, snowDays: 19, sunnyDays: 6 },
      { month: 'March', avgHighF: 38, avgLowF: 26, avgSnowfallInches: 54, snowDays: 18, sunnyDays: 8 },
      { month: 'April', avgHighF: 44, avgLowF: 30, avgSnowfallInches: 28, snowDays: 12, sunnyDays: 11 },
      { month: 'May', avgHighF: 52, avgLowF: 35, avgSnowfallInches: 6, snowDays: 4, sunnyDays: 15 },
      { month: 'June', avgHighF: 59, avgLowF: 41, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 18 },
      { month: 'July', avgHighF: 68, avgLowF: 47, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 23 },
      { month: 'August', avgHighF: 68, avgLowF: 47, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 22 },
      { month: 'September', avgHighF: 60, avgLowF: 41, avgSnowfallInches: 1, snowDays: 1, sunnyDays: 18 },
      { month: 'October', avgHighF: 48, avgLowF: 33, avgSnowfallInches: 10, snowDays: 5, sunnyDays: 12 },
      { month: 'November', avgHighF: 37, avgLowF: 27, avgSnowfallInches: 46, snowDays: 18, sunnyDays: 5 },
      { month: 'December', avgHighF: 33, avgLowF: 23, avgSnowfallInches: 64, snowDays: 22, sunnyDays: 4 },
    ],
  },

  // ───────────────────────────────────────────────
  // SOUTHWEST
  // ───────────────────────────────────────────────
  {
    slug: 'taos',
    monthly: [
      { month: 'January', avgHighF: 28, avgLowF: 4, avgSnowfallInches: 40, snowDays: 15, sunnyDays: 22 },
      { month: 'February', avgHighF: 32, avgLowF: 8, avgSnowfallInches: 34, snowDays: 13, sunnyDays: 21 },
      { month: 'March', avgHighF: 39, avgLowF: 14, avgSnowfallInches: 38, snowDays: 14, sunnyDays: 22 },
      { month: 'April', avgHighF: 48, avgLowF: 23, avgSnowfallInches: 22, snowDays: 10, sunnyDays: 23 },
      { month: 'May', avgHighF: 58, avgLowF: 31, avgSnowfallInches: 6, snowDays: 3, sunnyDays: 25 },
      { month: 'June', avgHighF: 69, avgLowF: 39, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 27 },
      { month: 'July', avgHighF: 74, avgLowF: 45, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 25 },
      { month: 'August', avgHighF: 72, avgLowF: 43, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 25 },
      { month: 'September', avgHighF: 64, avgLowF: 36, avgSnowfallInches: 2, snowDays: 1, sunnyDays: 25 },
      { month: 'October', avgHighF: 52, avgLowF: 25, avgSnowfallInches: 10, snowDays: 5, sunnyDays: 24 },
      { month: 'November', avgHighF: 38, avgLowF: 13, avgSnowfallInches: 26, snowDays: 12, sunnyDays: 22 },
      { month: 'December', avgHighF: 28, avgLowF: 4, avgSnowfallInches: 38, snowDays: 15, sunnyDays: 21 },
    ],
  },

  // ───────────────────────────────────────────────
  // CANADA (additional)
  // ───────────────────────────────────────────────
  {
    slug: 'big-white',
    monthly: [
      { month: 'January', avgHighF: 20, avgLowF: 4, avgSnowfallInches: 44, snowDays: 19, sunnyDays: 9 },
      { month: 'February', avgHighF: 24, avgLowF: 7, avgSnowfallInches: 36, snowDays: 16, sunnyDays: 10 },
      { month: 'March', avgHighF: 31, avgLowF: 13, avgSnowfallInches: 32, snowDays: 15, sunnyDays: 13 },
      { month: 'April', avgHighF: 42, avgLowF: 23, avgSnowfallInches: 14, snowDays: 8, sunnyDays: 15 },
      { month: 'May', avgHighF: 54, avgLowF: 32, avgSnowfallInches: 2, snowDays: 1, sunnyDays: 18 },
      { month: 'June', avgHighF: 63, avgLowF: 40, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 20 },
      { month: 'July', avgHighF: 73, avgLowF: 47, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 24 },
      { month: 'August', avgHighF: 72, avgLowF: 46, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 23 },
      { month: 'September', avgHighF: 60, avgLowF: 37, avgSnowfallInches: 2, snowDays: 1, sunnyDays: 19 },
      { month: 'October', avgHighF: 45, avgLowF: 26, avgSnowfallInches: 10, snowDays: 6, sunnyDays: 15 },
      { month: 'November', avgHighF: 28, avgLowF: 13, avgSnowfallInches: 36, snowDays: 17, sunnyDays: 8 },
      { month: 'December', avgHighF: 20, avgLowF: 5, avgSnowfallInches: 42, snowDays: 19, sunnyDays: 7 },
    ],
  },
  {
    slug: 'revelstoke',
    monthly: [
      { month: 'January', avgHighF: 24, avgLowF: 10, avgSnowfallInches: 54, snowDays: 21, sunnyDays: 6 },
      { month: 'February', avgHighF: 29, avgLowF: 13, avgSnowfallInches: 44, snowDays: 18, sunnyDays: 7 },
      { month: 'March', avgHighF: 37, avgLowF: 19, avgSnowfallInches: 38, snowDays: 16, sunnyDays: 10 },
      { month: 'April', avgHighF: 48, avgLowF: 28, avgSnowfallInches: 16, snowDays: 9, sunnyDays: 13 },
      { month: 'May', avgHighF: 59, avgLowF: 36, avgSnowfallInches: 2, snowDays: 1, sunnyDays: 16 },
      { month: 'June', avgHighF: 67, avgLowF: 44, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 18 },
      { month: 'July', avgHighF: 76, avgLowF: 50, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 22 },
      { month: 'August', avgHighF: 75, avgLowF: 49, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 21 },
      { month: 'September', avgHighF: 62, avgLowF: 40, avgSnowfallInches: 1, snowDays: 1, sunnyDays: 17 },
      { month: 'October', avgHighF: 47, avgLowF: 30, avgSnowfallInches: 10, snowDays: 5, sunnyDays: 13 },
      { month: 'November', avgHighF: 32, avgLowF: 19, avgSnowfallInches: 40, snowDays: 18, sunnyDays: 6 },
      { month: 'December', avgHighF: 25, avgLowF: 12, avgSnowfallInches: 52, snowDays: 21, sunnyDays: 5 },
    ],
  },
  {
    slug: 'fernie',
    monthly: [
      { month: 'January', avgHighF: 22, avgLowF: 5, avgSnowfallInches: 52, snowDays: 21, sunnyDays: 8 },
      { month: 'February', avgHighF: 27, avgLowF: 8, avgSnowfallInches: 42, snowDays: 18, sunnyDays: 9 },
      { month: 'March', avgHighF: 35, avgLowF: 15, avgSnowfallInches: 38, snowDays: 16, sunnyDays: 12 },
      { month: 'April', avgHighF: 46, avgLowF: 25, avgSnowfallInches: 16, snowDays: 9, sunnyDays: 14 },
      { month: 'May', avgHighF: 57, avgLowF: 33, avgSnowfallInches: 3, snowDays: 2, sunnyDays: 17 },
      { month: 'June', avgHighF: 65, avgLowF: 40, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 19 },
      { month: 'July', avgHighF: 74, avgLowF: 46, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 23 },
      { month: 'August', avgHighF: 73, avgLowF: 45, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 22 },
      { month: 'September', avgHighF: 61, avgLowF: 36, avgSnowfallInches: 2, snowDays: 1, sunnyDays: 18 },
      { month: 'October', avgHighF: 46, avgLowF: 26, avgSnowfallInches: 12, snowDays: 6, sunnyDays: 15 },
      { month: 'November', avgHighF: 30, avgLowF: 15, avgSnowfallInches: 38, snowDays: 17, sunnyDays: 8 },
      { month: 'December', avgHighF: 22, avgLowF: 6, avgSnowfallInches: 50, snowDays: 20, sunnyDays: 6 },
    ],
  },
]

export function getWeatherBySlug(slug: string): DestinationWeather | undefined {
  return weatherData.find((d) => d.slug === slug)
}

export function getWeatherForMonth(slug: string, month: string): WeatherMonth | undefined {
  const destination = weatherData.find((d) => d.slug === slug)
  if (!destination) return undefined
  return destination.monthly.find(
    (m) => m.month.toLowerCase() === month.toLowerCase()
  )
}

export function getBestSkiMonth(slug: string): string {
  const destination = weatherData.find((d) => d.slug === slug)
  if (!destination) return ''
  let bestMonth = ''
  let maxSnowfall = 0
  for (const m of destination.monthly) {
    if (m.avgSnowfallInches > maxSnowfall) {
      maxSnowfall = m.avgSnowfallInches
      bestMonth = m.month
    }
  }
  return bestMonth
}
