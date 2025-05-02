import React from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, TouchableOpacity, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';

const DietPlanScreen = () => {
  const navigation = useNavigation();

  const pdfs = [
    { title: 'Demo PDF 1', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
    { title: 'Demo PDF 2', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
  
    { title: 'Demo PDF 1', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
    { title: 'Demo PDF 2', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
    { title: 'Demo PDF 1', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
    { title: 'Demo PDF 2', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
 
  
  
  ];

  const openPdf = (url) => {
    Linking.openURL(url);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Ionicons name="arrow-back" size={24} color="#F7B500" onPress={() => navigation.goBack()} />
          <Text style={styles.headerTitle}>Diet Plan</Text>
        </View>

        {/* PDFs Section */}
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.sectionTitle}>PDFs</Text>
          <View style={styles.pdfRow}>
            {pdfs.map((item, idx) => (
              <View key={idx} style={styles.pdfCard}>
                <Ionicons name="document" size={50} color="red" />
                <Text style={styles.pdfTitle}>{item.title}</Text>
                <TouchableOpacity style={styles.downloadButton} onPress={() => openPdf(item.url)}>
                  <Ionicons name="download" size={16} color="#fff" />
                  <Text style={styles.downloadText}>Download</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default DietPlanScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7fafa',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  headerTitle: {
    marginLeft: 8,
    fontSize: 20,
    fontWeight: '700',
    color: '#F7B500',
  },
  scrollContent: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
    color: '#333',
  },
  pdfRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 12,
  },
  pdfCard: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    alignItems: 'center',
    elevation: 2,
  },
  pdfTitle: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
  },
  downloadButton: {
    flexDirection: 'row',
    backgroundColor: 'green',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginTop: 8,
    alignItems: 'center',
  },
  downloadText: {
    color: '#fff',
    marginLeft: 6,
    fontWeight: '600',
  },
});
