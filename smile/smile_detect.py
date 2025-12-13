import cv2

# Load Face Haarcascade
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + "haarcascade_frontalface_default.xml")

cap = cv2.VideoCapture(0)

while True:
    ret, frame = cap.read()
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    faces = face_cascade.detectMultiScale(gray, 1.3, 5)

    # If face detected → GREEN border
    if len(faces) > 0:
        color = (0, 255, 0)   # GREEN
    else:
        color = (0, 0, 255)   # RED

    # Draw BOX around the full frame
    h, w, _ = frame.shape
    thickness = 10
    cv2.rectangle(frame, (0, 0), (w, h), color, thickness)

    cv2.imshow("Face Detect Frame", frame)

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
