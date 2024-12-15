import { create } from 'zustand';
import type { ReportState, ReportActions } from './slices/reportSlice';
import type { UIState, UIActions } from './slices/uiSlice';
import { createReportSlice } from './slices/reportSlice';
import { createUISlice } from './slices/uiSlice';
import { createMockReport } from '../utils/mockData';

interface AccessibilityStore extends ReportState, UIState, ReportActions, UIActions {
  auditUrl: (url: string) => Promise<void>;
  auditDocument: (file: File) => Promise<void>;
}

export const useAccessibilityStore = create<AccessibilityStore>((set) => ({
  ...createReportSlice(set),
  ...createUISlice(set),

  auditUrl: async (url: string) => {
    set({ isLoading: true, error: null });
    try {
      const mockReport = createMockReport(url);
      set({ currentReport: mockReport, isLoading: false });
    } catch (error) {
      set({ error: 'Failed to analyze URL', isLoading: false });
    }
  },

  auditDocument: async (file: File) => {
    set({ isLoading: true, error: null });
    try {
      const mockReport = createMockReport(
        URL.createObjectURL(file),
        file.name.toLowerCase().endsWith('.pdf') ? 'pdf' : 'word'
      );
      set({ currentReport: mockReport, isLoading: false });
    } catch (error) {
      set({ error: 'Failed to analyze document', isLoading: false });
    }
  }
}));