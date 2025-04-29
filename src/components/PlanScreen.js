import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const PlanSection = () => {
  return (
    <>
      <View style={styles.planHeader}>
        <Text style={styles.sectionTitle}>Choose Your Plan</Text>
        <Text style={styles.sectionSubtitle}>Select the plan that best fits your health journey needs</Text>
      </View>

      <View style={styles.planBoxPrimary}>
        <View style={styles.planTopYellow}>
          <Text style={styles.planBoxTitle}>Premium Plan</Text>
          <Text style={styles.planBoxPrice}>$29.99/month</Text>
        </View>
        <View style={styles.planFeaturesBox}>
          {[
            "Unlimited appointments", "Customized Non-Drug Plan",
            "Progress Tracking", "Daily Follow-Ups",
            "Dietary supplements suggestion"
          ].map((text, idx) => (
            <Text key={idx} style={styles.planFeatureText}>✅ {text}</Text>
          ))}
          <TouchableOpacity style={styles.selectButton}>
            <Text style={styles.selectButtonText}>Select Premium</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.planBoxSecondary}>
        <View style={styles.planTopBorderYellow}>
          <Text style={styles.planBoxTitle}>Freemium Plan</Text>
          <Text style={styles.planBoxPrice}>$9.99/month</Text>
        </View>
        <View style={styles.planFeaturesBox}>
          {[
            "One time plan", "One time appointment",
            "Behavior management", "Supplement suggestion"
          ].map((text, idx) => (
            <Text key={idx} style={styles.planFeatureText}>✅ {text}</Text>
          ))}
          <TouchableOpacity style={styles.selectButtonYellow}>
            <Text style={styles.selectButtonTextBlack}>Select Freemium</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.subscribeButton}>
        <Text style={styles.subscribeButtonText}>Subscribe to Freemium Plan</Text>
      </TouchableOpacity>
      <Text style={styles.bottomNote}>You can cancel your subscription anytime</Text>
    </>
  );
};

const styles = StyleSheet.create({
  planHeader: { marginVertical: 20, alignItems: 'center', paddingHorizontal: 20 },
  sectionTitle: { fontSize: 24, fontWeight: '700', color: '#000', textAlign: 'center' },
  sectionSubtitle: { fontSize: 14, color: '#555', textAlign: 'center', marginTop: 8 },
  planBoxPrimary: { backgroundColor: '#fff', margin: 16, borderRadius: 10, elevation: 4 },
  planTopYellow: { backgroundColor: '#F7B500', borderTopLeftRadius: 10, borderTopRightRadius: 10, padding: 16, alignItems: 'center' },
  planBoxSecondary: { backgroundColor: '#fff', margin: 16, borderRadius: 10, elevation: 4, borderWidth: 2, borderColor: '#F7B500' },
  planTopBorderYellow: { padding: 16, alignItems: 'center' },
  planBoxTitle: { fontSize: 20, fontWeight: '700', color: '#000' },
  planBoxPrice: { fontSize: 16, fontWeight: '500', color: '#000', marginTop: 5 },
  planFeaturesBox: { padding: 16 },
  planFeatureText: { fontSize: 14, marginVertical: 4, color: '#333' },
  selectButton: { backgroundColor: '#ccc', marginTop: 12, paddingVertical: 12, borderRadius: 8, alignItems: 'center' },
  selectButtonText: { fontWeight: '700', fontSize: 16 },
  selectButtonYellow: { backgroundColor: '#F7B500', marginTop: 12, paddingVertical: 12, borderRadius: 8, alignItems: 'center' },
  selectButtonTextBlack: { fontWeight: '700', fontSize: 16, color: '#000' },
  subscribeButton: { backgroundColor: '#F7B500', margin: 24, paddingVertical: 14, borderRadius: 8, alignItems: 'center' },
  subscribeButtonText: { fontWeight: '700', fontSize: 18, color: '#fff' },
  bottomNote: { textAlign: 'center', fontSize: 12, color: '#777', marginBottom: 20 },
});

export default PlanSection;
